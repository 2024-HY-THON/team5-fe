import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friend.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import {
  REMOVE_ICON,
  RIGHT_ICON,
  ADD_ICON,
} from '../../../constants/Friend/icon';
import { getFriends } from '../../../services/Friend/friend';

const FriendList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getFriendsData = async () => {
      const response = await getFriends();
      return response;
    };
    getFriendsData();
  }, []);

  return (
    <S.FriendWrapper>
      <Header header="친구 목록" />
      <S.RequestButton onClick={() => navigate('request')}>
        <span>친구 요청</span>
        <img src={RIGHT_ICON} alt="right" />
      </S.RequestButton>
      <S.FriendLists>
        <S.FriendList>
          <S.FriendListProfile
            onClick={() => navigate('detail/0')}
          ></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton src={REMOVE_ICON} alt="remove-friend" />
        </S.FriendList>
        <S.FriendList>
          <S.FriendListProfile></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton src={REMOVE_ICON} alt="remove-friend" />
        </S.FriendList>
        <S.FriendList>
          <S.FriendListProfile></S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton src={REMOVE_ICON} alt="remove-friend" />
        </S.FriendList>
      </S.FriendLists>
      <S.FixedButton onClick={() => navigate('search')}>
        <img src={ADD_ICON} alt="remove-friend" />
      </S.FixedButton>
    </S.FriendWrapper>
  );
};

export default FriendList;
