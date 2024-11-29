import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friendDetail.style';
// assets
import { EXIT_ICON, MEDAL_ICON } from '../../../constants/Friend/icon';
import { BLUECHARACTER_ICON } from '../../../constants/Community/icon';

const FriendDetail = () => {
  const navigate = useNavigate();
  return (
    <S.FriendDetailWrapper>
      <S.FreindDetailExitButton
        src={EXIT_ICON}
        alt=""
        onClick={() => navigate(-1)}
      />
      <S.FriendDetailText>
        닉네임OO #0000
        <br />
        님의 프로필
      </S.FriendDetailText>
      <S.FriendDetailGrayCircle width={172} height={172}>
        <img
          src={BLUECHARACTER_ICON}
          alt=""
          style={{ width: '160px', height: '160px' }}
        />
      </S.FriendDetailGrayCircle>
      <S.FriendDetailGrade>
        <S.FriendDetailGrayCircle width={56} height={56}>
          <img
            src={MEDAL_ICON}
            alt="medal"
            style={{ width: '40px', height: '40px' }}
          />
        </S.FriendDetailGrayCircle>
        <S.FriendDetailGradeCount>10</S.FriendDetailGradeCount>
      </S.FriendDetailGrade>
    </S.FriendDetailWrapper>
  );
};

export default FriendDetail;
