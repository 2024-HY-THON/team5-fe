import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeBanner, BannerContent } from '../../../styles/Home/home.style';
import { STAR_YELLOW, ARROW_RIGHT } from '../../../constants/Common/icon';

const DailyBanner = () => {
  const navigate = useNavigate();
  return (
    <HomeBanner
      onClick={() => {
        navigate('/room/createLog');
      }}
    >
      <BannerContent>
        <div className="flex gap-x-[10px] justify-center items-center">
          <img
            src={STAR_YELLOW}
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
