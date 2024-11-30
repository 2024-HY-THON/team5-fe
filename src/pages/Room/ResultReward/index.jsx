import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import * as S from '../../../styles/Room/room.style';
import { BACK_ARROW_ICON } from '../../../constants/Common/icon';

const ResultReward = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  if (!image) {
    return <p>이미지가 없습니다. 다시 시도해주세요.</p>;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'reward_image.png';
    link.href = image;
    link.click();
  };

  return (
    <>
      <S.RoomHeader className="flex">
        <button
          className="mr-auto pl-[10px]"
          type="button"
          onClick={() => navigate(-1)}
        >
          <img
            src={BACK_ARROW_ICON}
            alt="back"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
        <h4>상장 출력하기</h4>
        <button
          className="ml-auto pr-[10px]"
          type="button"
          onClick={() => navigate('/room')}
        >
          <img
            src={CLOSE_BUTTON_ICON}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.RoomWrapper styles={{ bg: '#F2F2F2' }}>
        <div className="flex flex-col gap-[10px] items-center justify-center pt-[50px] ">
          <h1 className="text-xl font-bold mb-4">상장 제작이 완료되었어요</h1>
          <img
            src={image}
            alt="generated_reward"
            style={{ width: '190px', height: '230px' }}
          />
          <div className="flex gap-[15px] pt-[40px] w-full justify-center items-center">
            <div className="w-[116px] h-[48px] rounded-[40px] bg-[#525252]">
              <button
                onClick={handleDownload}
                // download="reward_image.png"
                className="w-[116px] h-[48px] rounded-[40px] text-white flex items-center justify-center"
              >
                <p>저장하기</p>
              </button>
            </div>
            <button
              type="button"
              className="w-[116px] h-[48px] rounded-[40px] bg-[#ffffff]"
            >
              <p>공유하기</p>
            </button>
          </div>
        </div>
      </S.RoomWrapper>
    </>
  );
};

export default ResultReward;
