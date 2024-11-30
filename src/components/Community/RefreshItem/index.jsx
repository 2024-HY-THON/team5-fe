import React, { useState } from 'react';
import * as S from '../../../styles/Community/refreshItem.style';
import {
  STAR_ICON,
  BLUECHARACTER_ICON,
} from '../../../constants/Community/icon';
import Modal from '../../../components/Friend/Modal';
import Lottie from 'lottie-react';
import Stamp from '../../../constants/Community/stamp.json';
const RefreshItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const dummy = [
    { title: '#산책', content: '넘어졌다.' },
    { title: '#등산', content: '힘들다' },
    { title: '#점심', content: '굶었다.' },
  ];
  const [recommend, setRecommend] = useState([0, 3, 1]);

  const handleOnClick = (idx) => {
    setIndex(idx);
    setIsOpen(true);
    setRecommend((prev) => {
      let temp = [...prev];
      temp[idx] = temp[idx] + 1;
      return temp;
    });
  };

  return (
    <S.RefreshItemWrapper>
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>{dummy[0].title}</S.ContentTitle>
          <S.ContentDate>2024.11.30</S.ContentDate>
        </S.ContentHeader>
        <S.ContentDivWrap>
          <S.ContentDiv>{dummy[0].content}</S.ContentDiv>
          <S.ContentButton onClick={() => handleOnClick(0)}>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>{`${recommend[0]}개`}</span>
          </S.ContentButton>
        </S.ContentDivWrap>
      </S.Content>
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>{dummy[1].title}</S.ContentTitle>
          <S.ContentDate>2024.11.30</S.ContentDate>
        </S.ContentHeader>
        <S.ContentDivWrap>
          <S.ContentDiv>{dummy[1].content}</S.ContentDiv>
          <S.ContentButton onClick={() => handleOnClick(1)}>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>{`${recommend[1]}개`}</span>
          </S.ContentButton>
        </S.ContentDivWrap>
      </S.Content>
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>{dummy[2].title}</S.ContentTitle>
          <S.ContentDate>2024.11.30</S.ContentDate>
        </S.ContentHeader>
        <S.ContentDivWrap>
          <S.ContentDiv>{dummy[2].content}</S.ContentDiv>
          <S.ContentButton onClick={() => handleOnClick(2)}>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>{`${recommend[2]}개`}</span>
          </S.ContentButton>
        </S.ContentDivWrap>
      </S.Content>
      {isOpen && (
        <Modal setClose={setIsOpen}>
          <S.ModalInner>
            <S.ModalTop>
              <S.ModalHeader>
                <S.GrayCircle>
                  <img
                    src={BLUECHARACTER_ICON}
                    alt=""
                    style={{ width: '52px', height: '52px' }}
                  />
                </S.GrayCircle>
                <S.ModalNameDate>
                  <S.ModalName>익명 별록</S.ModalName>
                  <S.ModalDate>2023.12.12</S.ModalDate>
                </S.ModalNameDate>
              </S.ModalHeader>
              <S.ModalStar>
                <img
                  src={STAR_ICON}
                  alt=""
                  style={{ width: '19px', height: '19px' }}
                />
                <span>{`${recommend[index]}개`}</span>
              </S.ModalStar>
            </S.ModalTop>
            <S.ModalContents>
              <span>{dummy[index].title}</span>
              <div>{dummy[index].content}</div>
            </S.ModalContents>
            <S.LottileContainer>
              <div>
                <Lottie animationData={Stamp} loop={false} />
              </div>
            </S.LottileContainer>
          </S.ModalInner>
        </Modal>
      )}
    </S.RefreshItemWrapper>
  );
};

export default RefreshItem;
