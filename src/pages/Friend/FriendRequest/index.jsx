import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friend.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import {
  ACCEPT_ICON,
  CANCEL_ICON,
  ADD_ICON,
} from '../../../constants/Friend/icon';

const FriendRequest = () => {
  const navigate = useNavigate();
  return (
    <S.FriendWrapper>
      <Header header="친구 요청" />
      <S.FriendLists>
        <S.FriendList>
          <S.FriendListProfile
            onClick={() => navigate('/friend/detail/0')}
          ></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendRequests>
            <S.FriendButton src={ACCEPT_ICON} alt="accept-friend" />
            <S.FriendButton src={CANCEL_ICON} alt="cancel-friend" />
          </S.FriendRequests>
        </S.FriendList>
      </S.FriendLists>
      <S.FixedButton onClick={() => navigate('/friend/search')}>
        <img src={ADD_ICON} alt="remove-friend" />
      </S.FixedButton>
    </S.FriendWrapper>
  );
};

export default FriendRequest;