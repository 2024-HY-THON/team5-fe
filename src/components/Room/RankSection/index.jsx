import React from 'react';
import LogCard from './LogCard';

const RankSection = () => {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <h3 className="pl-[10px]">나의 별록</h3>
      <div className="grid grid-rows-2 grid-cols-2 gap-[15px]">
        <LogCard tag="태그" background="#ff7777" />
        <LogCard
          content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
          background="#70c1ff"
        />
        <LogCard background="#a87ff3" />
        <LogCard isBlank />
      </div>
    </div>
  );
};

export default RankSection;
