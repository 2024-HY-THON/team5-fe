import React from 'react';
import { HomeBanner, BannerContent } from '../../../styles/Home/home.style';
import { STAR_CHARACTER, ARROW_RIGHT } from '../../../constants/Common/icon';

const DailyBanner = () => {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <h3 className="pl-[10px]">가장 많은 도장을 받은 별록</h3>
      <HomeBanner>
        <BannerContent>
          <div className="flex gap-x-[10px] justify-center items-center">
            <img
              src={STAR_CHARACTER}
              alt="logo"
              style={{ width: '47px', height: '44px' }}
            />
            <div>
              <h2>2024년 11월 29일</h2>
              <h2>첫 번째 별록</h2>
            </div>
          </div>
          <img
            src={ARROW_RIGHT}
            alt="logo"
            style={{ width: '30px', height: '30px' }}
          />
        </BannerContent>
      </HomeBanner>
    </div>
  );
};

export default DailyBanner;
