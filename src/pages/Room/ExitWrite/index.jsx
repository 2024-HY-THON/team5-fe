import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import * as S from '../../../styles/Room/room.style';

const ExitWrite = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.RoomHeader className="flex">
        <div className="mr-auto w-[30px]" />
        <h4>작성 나가기</h4>
        <button
          className="ml-auto pr-[10px]"
          type="button"
          onClick={() => navigate(-1)}
        >
          <img
            src={CLOSE_BUTTON_ICON}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.ExitWrapper styles={{ bg: '#ffffff' }}>
        <div className="flex flex-col items-center justify-center">
          <h2>잠깐!</h2>
          <h2>지금 나가면 작성한 내용이</h2>
          <h2>저장되지 않아요.</h2>
        </div>
        <div className="flex gap-[15px] pt-[40px] w-full justify-center items-center">
          <div className="w-[147px] h-[48px] items-center justify-center flex rounded-[40px] bg-[#FFC655]">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="w-[116px] h-[48px] rounded-[40px] bg-[#ffc655] flex items-center justify-center text-white"
            >
              <p>계속 작성하기</p>
            </button>
          </div>
          <button
            type="button"
            onClick={() => navigate('/room')}
            className="w-[116px] h-[48px] rounded-[40px] bg-[#D9D9D9]"
          >
            <p>나가기</p>
          </button>
        </div>
      </S.ExitWrapper>
    </>
  );
};

export default ExitWrite;
