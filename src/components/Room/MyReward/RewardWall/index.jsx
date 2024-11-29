import React from 'react';

const RewardWall = () => {
  const dummyData = [...Array(36).keys()];
  return (
    <div className="self-center grid grid-cols-9 grid-rows-4 gap-[8px] w-[345px]">
      {dummyData.map((_, index) => (
        <div className="w-[31px] h-[44px] bg-[#d9d9d9]" key={index} />
      ))}
    </div>
  );
};

export default RewardWall;
