import React from 'react';
import { STAR_ICON } from '../../../../constants/Common/icon';

const StampInfo = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3>받은 스탬프 수</h3>
      <div className="w-[135px] h-[54px] rounded-[35px] bg-[#F2F2F2] flex gap-[10px] items-center justify-center">
        <img src={STAR_ICON} alt="stamp" className="w-[27px] h-[27px]" />
        <h1>12개</h1>
      </div>
    </div>
  );
};

export default StampInfo;
