import React from 'react';
import LogCard from './LogCard';

const RankSection = () => {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <h2>이번 주 핫한 별록</h2>
      <div className="grid grid-rows-2 grid-cols-2 gap-[15px]">
        <LogCard
          tag="해커톤"
          content="밤새워 해커톤 개발함 너무 졸려요 열심히 했어요"
          background="#ff7777"
        />
        <LogCard
          tag="크리스마스"
          content="한 달 남았는데... 헤어짐"
          background="#70c1ff"
        />
        <LogCard tag="종강" content="아이쿠 정강이야" background="#a87ff3" />
        <LogCard
          tag="챔스"
          content="축구 직관 가고 싶다."
          background="#65EE83"
        />
      </div>
    </div>
  );
};

export default RankSection;
