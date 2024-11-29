import React from 'react';
import LogCard from './LogCard';

const RankSection = () => {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <h2>이번 주 핫한 별록</h2>
      <div className="grid grid-rows-2 grid-cols-2 gap-[15px]">
        <LogCard tag="맛집" background="#ff7777" />
        <LogCard
          content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
          background="#70c1ff"
        />
        <LogCard background="#a87ff3" />
        <LogCard background="#65EE83" />
      </div>
    </div>
  );
};

export default RankSection;
