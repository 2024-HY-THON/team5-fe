import React from 'react';
import LogCard from './LogCard';
import { useNavigate } from 'react-router-dom';
import { CommonCard } from '../../../../styles/Common/common.style';
import { STAR_ICON, GREY_RIGHT } from '../../../../constants/Common/icon';

const MyLog = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-[15px]">
      <h3 className="pl-[10px]">나의 별록</h3>
      <div className="grid grid-rows-2 grid-cols-2 gap-[15px]">
        <LogCard tag="전역" content="언제 전역하지?" background="#ff7777" />
        <LogCard
          tag="겨울"
          content="눈이 너무 많이 내려요"
          background="#70c1ff"
        />
        <LogCard
          tag="노숙"
          content="학교 도서관 노숙 재밌네요"
          background="#a87ff3"
        />
        <CommonCard
          onClick={() => navigate('/room/history')}
          // className="flex justify-between"
          styles={{ 'border-radius': '20px', background: '#F2F2F2' }}
        >
          <div className="w-full p-[20px] h-full flex flex-col justify-between text-white gap-[5px]">
            <div className="h-[40px] w-[40px]">
              <img src={STAR_ICON} alt="start" className="w-full h-full" />
            </div>
            <div className="flex gap-[5px] items-center justify-start ">
              <h2 className="text-[#525252]">전체보기</h2>
              <div className="w-[15px] h-[15px]">
                <img
                  src={GREY_RIGHT}
                  alt="grey_right"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </CommonCard>
      </div>
    </div>
  );
};

export default MyLog;
