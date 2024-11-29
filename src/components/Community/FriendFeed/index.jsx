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

  return (
    <S.FriendFeedWrapper>
      <S.Content>
        <div style={{ display: 'flex', gap: '16px' }}>
          <S.Profile>
            <S.GrayCircle>
              <img src={BLUECHARACTER_ICON} alt="" />
            </S.GrayCircle>
            <S.Nickname>닉네임</S.Nickname>
          </S.Profile>
          <div>
            <S.ContentTitle>제목</S.ContentTitle>
            <S.ContentDiv>내용내용</S.ContentDiv>
            <S.ContentDate>20312321</S.ContentDate>
          </div>
        </div>
        <div>
          <S.ContentButton onClick={() => setIsOpen(true)}>
            <img
              src={STAR_ICON}
              alt=""
              style={{ width: '19px', height: '19px' }}
            />
            <span>12</span>
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
    </S.FriendFeedWrapper>
  );
};

export default FriendFeed;
