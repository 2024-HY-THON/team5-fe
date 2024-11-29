import React from 'react';
// styled-components
import * as S from '../../../styles/Community/community.style';
// assets
import { CHARACTER_ICON, STAR_ICON } from '../../../constants/Community/icon';
import RefreshItem from '../RefreshItem';

const RealTime = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <S.CommunityContents>
        <S.CommunityContentHeader>실시간 인기 별록</S.CommunityContentHeader>
        <S.CommunityContent style={{ backgroundColor: '#70C1FF' }}>
          <div>
            <img src={CHARACTER_ICON} alt="character" />
            <div>
              <S.CommunityContentTitle>#제목</S.CommunityContentTitle>
              <S.CommunityContentText>내용내용내용</S.CommunityContentText>
            </div>
          </div>
          <button style={{ display: 'flex', gap: '5px' }}>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>12개</span>
          </button>
        </S.CommunityContent>
        <S.CommunityContent
          style={{ backgroundColor: '#65EE83', marginBottom: '15px' }}
        >
          <div>
            <img src={CHARACTER_ICON} alt="character" />
            <div>
              <S.CommunityContentTitle>#제목</S.CommunityContentTitle>
              <S.CommunityContentText>내용내용내용</S.CommunityContentText>
            </div>
          </div>
          <button style={{ display: 'flex', gap: '5px' }}>
            <img
              src={STAR_ICON}
              alt="star"
              style={{ width: '20px', height: '20px' }}
            />
            <span>12개</span>
          </button>
        </S.CommunityContent>
      </S.CommunityContents>
      <RefreshItem />
    </div>
  );
};

export default RealTime;
