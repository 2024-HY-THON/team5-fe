import React from 'react';
// styled-components
import * as S from '../../../styles/Friend/friend-search.style';
// components
import Header from '../../../components/Friend/FriendHeader';

const FriendSearch = () => {
  return (
    <S.FriendSearchWrapper>
      <Header header={'친구 추가'} />
      <S.FriendSearchText>검색할 닉네임을 입력하세요</S.FriendSearchText>
      <S.FriendSearchInput type="text" placeholder="닉네임 #숫자코드" />
    </S.FriendSearchWrapper>
  );
};

export default FriendSearch;
