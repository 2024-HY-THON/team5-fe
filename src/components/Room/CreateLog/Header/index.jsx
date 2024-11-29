import React from 'react';
import { STAR_BLUE } from '../../../../constants/Common/icon';

const Header = () => {
  return (
    <div className="flex flex-col gap-[15px] items-center justify-center">
      <div className="flex items-center justify-between">
        <div className="w-[100px] h-[64px]">
          <img src={STAR_BLUE} alt="star_blue" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>오늘은 어떤 일이</h2>
        <h2>있었나요?</h2>
      </div>
    </div>
  );
};

export default Header;
