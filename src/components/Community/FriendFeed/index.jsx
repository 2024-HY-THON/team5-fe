import React from 'react';
import * as S from '../../../styles/Community/friendFeed.style';
import { STAR_ICON } from '../../../constants/Community/icon';

const FriendFeed = () => {
  return (
    <S.FriendFeedWrapper>
      <S.Content>
        <div style={{ display: 'flex', gap: '16px' }}>
          <S.Profile>
            <S.GrayCircle></S.GrayCircle>
            <S.Nickname>닉네임</S.Nickname>
          </S.Profile>
          <div>
            <S.ContentTitle>제목</S.ContentTitle>
            <S.ContentDiv>내용내용</S.ContentDiv>
            <S.ContentDate>20312321</S.ContentDate>
          </div>
        </div>
        <div>
          <S.ContentButton>
            <img
              src={STAR_ICON}
              alt=""
              style={{ width: '19px', height: '19px' }}
            />
            <span>12</span>
          </S.ContentButton>
        </div>
      </S.Content>
    </S.FriendFeedWrapper>
  );
};

export default FriendFeed;
