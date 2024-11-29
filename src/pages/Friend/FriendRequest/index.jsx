import React from 'react';
// styled-components
import * as S from '../../../styles/Friend/friend.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import {
  AcceptIcon,
  CancelIcon,
  AddIcon,
} from '../../../constants/Friend/icon';

const FriendRequest = () => {
  return (
    <S.FriendWrapper>
      <Header header="친구 요청" />
      <S.FriendLists>
        <S.FriendList>
          <S.FriendListProfile></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendRequests>
            <S.FriendButton src={AcceptIcon} alt="accept-friend" />
            <S.FriendButton src={CancelIcon} alt="cancel-friend" />
          </S.FriendRequests>
        </S.FriendList>
      </S.FriendLists>
      <S.FixedButton>
        <img src={AddIcon} alt="remove-friend" />
      </S.FixedButton>
    </S.FriendWrapper>
  );
};

export default FriendRequest;
