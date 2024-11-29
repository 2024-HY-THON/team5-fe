import React from 'react';
// styled-components
import * as S from '../../styles/Community/community.style';

const Community = () => {
  return (
    <S.CommunityContainer>
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
      <S.CommunityContentLists>
        <S.CommunityContentList>
          <span>#산책</span>
          <div>
            내용내용내용
            <br />
            내용내용
            <br />
            내용내용내용
          </div>
        </S.CommunityContentList>
      </S.CommunityContentLists>
    </S.CommunityContainer>
  );
};

export default Community;
