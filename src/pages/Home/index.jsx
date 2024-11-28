import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../styles/Home/home.style';
import { MAIN_LOGO } from '../../constants/Common/icon';
import DailyBanner from '../../components/Home/DailyBanner';
import RankSection from '../../components/Home/RankSection';
import FriendsSection from '../../components/Home/FriendsSection';

const Home = () => {
  return (
    <>
      <S.HomeHeader>
        <img
          src={MAIN_LOGO}
          alt="logo"
          style={{ width: '83px', height: '35px' }}
        />
      </S.HomeHeader>
      <S.HomeWrapper>
        <Link to="/login">
          <button>로그인 페이지로 가기</button>
        </Link>
        <DailyBanner />
        <RankSection />
        <FriendsSection />
      </S.HomeWrapper>
    </>
  );
};

export default Home;
