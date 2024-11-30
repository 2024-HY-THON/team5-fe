import React, { useState } from 'react';
import * as S from '../../../styles/Community/friendFeed.style';
import {
  STAR_ICON,
  BLUECHARACTER_ICON,
} from '../../../constants/Community/icon';
import Stamp from '../../../constants/Community/stamp.json';
import Lottie from 'lottie-react';
import Modal from '../../Friend/Modal';

const FriendFeed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recommend, setRecommend] = useState(12);

  const handleOnclick = () => {
    setRecommend(recommend + 1);
    setIsOpen(true);
  };
  return (
    <S.FriendFeedWrapper>
      <S.Content>
        <div style={{ display: 'flex', gap: '16px' }}>
          <S.Profile>
            <S.GrayCircle>
              <img src={BLUECHARACTER_ICON} alt="" />
            </S.GrayCircle>
            <S.Nickname>철수</S.Nickname>
          </S.Profile>
          <div>
            <S.ContentTitle>#학원</S.ContentTitle>
            <S.ContentDiv>수학학원 쨈</S.ContentDiv>
            <S.ContentDate>2024-11-30</S.ContentDate>
          </div>
        </div>
        <div>
          <S.ContentButton onClick={() => handleOnclick()}>
            <img
              src={STAR_ICON}
              alt=""
              style={{ width: '19px', height: '19px' }}
            />
            <span>{recommend}</span>
          </S.ContentButton>
        </div>
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
                  <S.ModalName>철수</S.ModalName>
                  <S.ModalDate>2024.11.30</S.ModalDate>
                </S.ModalNameDate>
              </S.ModalHeader>
              <S.ModalStar>
                <img
                  src={STAR_ICON}
                  alt=""
                  style={{ width: '19px', height: '19px' }}
                />
                <span>{recommend}</span>
              </S.ModalStar>
            </S.ModalTop>
            <S.ModalContents>
              <span>#학원</span>
              <div>수학학원 쨈</div>
            </S.ModalContents>
            <S.LottileContainer>
              <div>
                <Lottie animationData={Stamp} loop={false} />
              </div>
            </S.LottileContainer>
          </S.ModalInner>
        </Modal>
      )}
    </S.FriendFeedWrapper>
  );
};

export default FriendFeed;
