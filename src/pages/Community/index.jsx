import React from 'react';
// styled-components
import * as S from '../../styles/Community/community.style';
import Header from '../../components/Community/CommunityHeader';

const Community = () => {
  return (
    <S.CommunityContainer>
      <Header header={'피드'} />
      <S.CommunityContents>
        <S.CommunityCategoryBox>
          <S.CommunityCategory selected>실시간 별록</S.CommunityCategory>
          <S.CommunityCategory>친구 별록</S.CommunityCategory>
        </S.CommunityCategoryBox>
        <S.CommunityContentHeader>실시간 인기 별록</S.CommunityContentHeader>
        <S.CommunityContent style={{ backgroundColor: '#70C1FF' }}>
          <img src="" alt="" />
          <div>
            <S.CommunityContentTitle>#제목</S.CommunityContentTitle>
            <S.CommunityContentText>내용내용내용</S.CommunityContentText>
          </div>
          <button>
            <img src="" alt="" />
            <span>12개</span>
          </button>
        </S.CommunityContent>
        <S.CommunityContent
          style={{ backgroundColor: '#65EE83' }}
        ></S.CommunityContent>
      </S.CommunityContents>
    </S.CommunityContainer>
  );
};

export default Community;
