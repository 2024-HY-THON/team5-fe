import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../styles/Setting/setting.style';
// assets
import { MEDAL_ICON } from '../../constants/Friend/icon';
import { STAR_ICON } from '../../constants/Community/icon';
import { BRUSH_ICON } from '../../constants/Setting/icon';
const profiles = [
  '/assets/img/yellowstar.svg',
  '/assets/img/bluestar.svg',
  '/assets/img/redstar.svg',
  '/assets/img/purplestar.svg',
];
const Setting = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nick');
  const code = localStorage.getItem('code');
  const profile = localStorage.getItem('selectedProfile');

  return (
    <S.SettingWrapper>
      <S.Header>환경설정</S.Header>
      <S.GrayCircle width={112} height={112} style={{ marginTop: '16px' }}>
        <img src={profiles[profile]} alt="profile" />
      </S.GrayCircle>
      <S.NickName>{`${nickname} #${code}`}</S.NickName>
      <S.EditButton onClick={() => navigate('profile')}>
        프로필 수정
      </S.EditButton>
      <S.MedalWrapper>
        <S.Medal>
          <S.GrayCircle width={56} height={56}>
            <img
              src={STAR_ICON}
              alt="medal"
              style={{ width: '40px', height: '40px' }}
            />
          </S.GrayCircle>
          <S.MedalCount>10</S.MedalCount>
        </S.Medal>
        <S.Medal>
          <S.GrayCircle width={56} height={56}>
            <img
              src={MEDAL_ICON}
              alt="medal"
              style={{ width: '40px', height: '40px' }}
            />
          </S.GrayCircle>
          <S.MedalCount>10</S.MedalCount>
        </S.Medal>
        <S.Medal>
          <S.GrayCircle width={56} height={56}>
            <img
              src={BRUSH_ICON}
              alt="medal"
              style={{ width: '40px', height: '40px' }}
            />
          </S.GrayCircle>
          <S.MedalCount>10</S.MedalCount>
        </S.Medal>
      </S.MedalWrapper>
      <S.FriendButton onClick={() => navigate('/friend/search')}>
        친구 검색
      </S.FriendButton>
      <S.Company>
        <span>고객센터(FAQ)</span>
        <span>버전 정보</span>
        <button onClick={() => navigate('/login')}>
          <span>로그아웃</span>
        </button>
      </S.Company>
    </S.SettingWrapper>
  );
};

export default Setting;
