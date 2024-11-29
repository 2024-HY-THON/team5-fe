import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friend.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import { RemoveIcon, RightIcon, AddIcon } from '../../../constants/Friend/icon';

const FriendList = () => {
  const navigate = useNavigate();

  return (
    <S.FriendWrapper>
      <Header header="친구 목록" />
      <S.RequestButton onClick={() => navigate('request')}>
        <span>친구 요청</span>
        <img src={RightIcon} alt="right" />
      </S.RequestButton>
      <S.FriendLists>
        <S.FriendList>
          <S.FriendListProfile></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton src={RemoveIcon} alt="remove-friend" />
        </S.FriendList>
        <S.FriendList>
          <S.FriendListProfile></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton src={RemoveIcon} alt="remove-friend" />
        </S.FriendList>
        <S.FriendList>
          <S.FriendListProfile></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton src={RemoveIcon} alt="remove-friend" />
        </S.FriendList>
      </S.FriendLists>
      <S.FixedButton>
        <img src={AddIcon} alt="remove-friend" />
      </S.FixedButton>
    </S.FriendWrapper>
  );
};

export default FriendList;
