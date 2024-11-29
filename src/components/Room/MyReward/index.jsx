import React from 'react';
import RewardWall from './RewardWall';
import { STAR_YELLOW } from '../../../constants/Common/icon';

const MyReward = () => {
  return (
    <div className="flex flex-col gap-y-[15px] items-stretch relative">
      <h3 className="pl-[10px]">내가 받은 상장</h3>
      <RewardWall />
      <div className="w-[193px] h-[178px] absolute left-1/2 bottom-[-40px] transform -translate-x-1/2">
        <img src={STAR_YELLOW} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default MyReward;
