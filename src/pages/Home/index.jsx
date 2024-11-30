import React from 'react';
import * as S from '../../styles/Home/home.style';
import { MAIN_LOGO } from '../../constants/Common/icon';
import DailyBanner from '../../components/Home/DailyBanner';
import RankSection from '../../components/Home/RankSection';
import FriendsSection from '../../components/Home/FriendsSection';

const Home = () => {
  return (
    <>
      <S.HomeWrapper>
        <S.HomeHeader>
          <img
            src={MAIN_LOGO}
            alt="logo"
            style={{ width: '100px', height: '40px', marginLeft: '4px' }}
          />
        </S.HomeHeader>
        <DailyBanner />
        <RankSection />
        <FriendsSection />
      </S.HomeWrapper>
    </>
  );
};

export default Home;
