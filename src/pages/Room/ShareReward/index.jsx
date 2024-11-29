import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import { REWARD_BLUE } from '../../../constants/Common/imgs';
import * as S from '../../../styles/Room/room.style';

const ShareReward = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.RoomHeader className="flex">
        <div className="mr-auto w-[30px]" />
        <h4>내 상장</h4>
        <button
          className="ml-auto pr-[10px]"
          type="button"
          onClick={() => navigate('../rewards')}
        >
          <img
            src={CLOSE_BUTTON_ICON}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.RoomWrapper styles={{ bg: '#F2F2F2' }}>
        <img
          src={REWARD_BLUE}
          alt="reward"
          className=""
          style={{ width: '100%', height: '370px' }}
        />
        <div className="flex gap-[15px] w-full justify-center items-center">
          <button
            type="button"
            className="w-[116px] h-[48px] rounded-[40px] bg-[#525252] text-white"
          >
            <p>저장하기</p>
          </button>
          <button
            type="button"
            className="w-[116px] h-[48px] rounded-[40px] bg-[#ffffff]"
          >
            <p>공유하기</p>
          </button>
        </div>
        {/* <FilterHeader />
        {dummyData.map((data, index) => (
          <DateHistory key={index} data={data} />
        ))} */}
      </S.RoomWrapper>
    </>
  );
};

export default ShareReward;
