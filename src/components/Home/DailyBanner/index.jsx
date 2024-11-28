import React from 'react';
import { HomeBanner, BannerContent } from '../../../styles/Home/home.style';
import { STAR_CHARACTER, ARROW_RIGHT } from '../../../constants/Common/icon';

const DailyBanner = () => {
  return (
    <HomeBanner>
      <BannerContent>
        <div className="flex gap-x-[10px] justify-center items-center">
          <img
            src={STAR_CHARACTER}
            alt="logo"
            style={{ width: '47px', height: '44px' }}
          />
          <div>
            <h2>오늘 겪었던</h2>
            <h2>가장 어이없는 일은?</h2>
          </div>
        </div>
        <img
          src={ARROW_RIGHT}
          alt="logo"
          style={{ width: '30px', height: '30px' }}
        />
      </BannerContent>
    </HomeBanner>
  );
};

export default DailyBanner;
