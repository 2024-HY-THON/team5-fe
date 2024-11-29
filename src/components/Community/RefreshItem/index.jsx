import React, { useState } from 'react';
import * as S from '../../../styles/Community/refreshItem.style';
import { STAR_ICON } from '../../../constants/Community/icon';
import Modal from '../../../components/Friend/Modal';
import Lottie from 'lottie-react';
import Stamp from '../../../constants/Community/stamp.json';
const RefreshItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.RefreshItemWrapper>
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>제목</S.ContentTitle>
          <S.ContentDate>날짜</S.ContentDate>
        </S.ContentHeader>
        <S.ContentDivWrap>
          <S.ContentDiv>내용내용내용</S.ContentDiv>
          <S.ContentButton onClick={() => setIsOpen(true)}>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>12개</span>
          </S.ContentButton>
        </S.ContentDivWrap>
      </S.Content>
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>제목</S.ContentTitle>
          <S.ContentDate>날짜</S.ContentDate>
        </S.ContentHeader>
        <S.ContentDivWrap>
          <S.ContentDiv>내용내용내용</S.ContentDiv>
          <S.ContentButton>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>12개</span>
          </S.ContentButton>
        </S.ContentDivWrap>
      </S.Content>
      <S.Content>
        <S.ContentHeader>
          <S.ContentTitle>제목</S.ContentTitle>
          <S.ContentDate>날짜</S.ContentDate>
        </S.ContentHeader>
        <S.ContentDivWrap>
          <S.ContentDiv>내용내용내용</S.ContentDiv>
          <S.ContentButton>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>12개</span>
          </S.ContentButton>
        </S.ContentDivWrap>
      </S.Content>
      {isOpen && (
        <Modal setClose={setIsOpen}>
          <S.ModalInner>
            <S.ModalTop>
              <S.ModalHeader>
                <S.GrayCircle></S.GrayCircle>
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
                <span>12</span>
              </S.ModalStar>
            </S.ModalTop>
            <S.ModalContents>
              <span>산책</span>
              <div>dadsadsdsa</div>
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
