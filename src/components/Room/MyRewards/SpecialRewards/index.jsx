import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TAG_LIST } from '../../../../constants/Room/tags';

const SpecialRewards = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-[10px] min-w-[330px] max-w-[353px] min-w-[265px]">
        <h3 className="pl-[10px]">스페셜 상장</h3>
        <div className="flex justify-between w-full h-fit">
          <button
            onClick={() => {
              navigate('/room/shareReward');
            }}
            className="relative w-[103px] h-[142px] rounded-[20px] bg-[#ffffff]"
          >
            <div className="absolute bottom-0 w-full h-[37px] bg-[#f77] rounded-bl-[20px] rounded-br-[20px]">
              <p className="text-white text-center font-bold text-xs">
                디지털 디톡스 상
              </p>
              <p className="flex flex-col justify-center text-white text-center font-medium text-xs font-pretendard">
                2024.11.29
              </p>
            </div>
          </button>

          <button
            onClick={() => {
              navigate('/room/shareReward');
            }}
            className="relative w-[103px] h-[142px] rounded-[20px] bg-[#ffffff]"
          >
            <div className="absolute bottom-0 w-full h-[37px] bg-[#f77] rounded-bl-[20px] rounded-br-[20px]">
              <p className="text-white text-center font-bold text-xs">1일 상</p>
              <p className="flex flex-col justify-center text-white text-center font-medium text-xs font-pretendard">
                2024.11.29
              </p>
            </div>
          </button>
          <button
            onClick={() => {
              navigate('/room/shareReward');
            }}
            className="relative w-[103px] h-[142px] rounded-[20px] bg-[#ffffff]"
          >
            <div className="absolute bottom-0 w-full h-[37px] bg-[#f77] rounded-bl-[20px] rounded-br-[20px]">
              <p className="text-white text-center font-bold text-xs">가입상</p>
              <p className="flex flex-col justify-center text-white text-center font-medium text-xs font-pretendard">
                2024.11.29
              </p>
            </div>
          </button>
        </div>
        <h3 className="pl-[10px] mt-[55px]">내가 만든 상장</h3>
      </div>
      <div className="flex flex-wrap w-[100%] gap-[22px]">
        {TAG_LIST.map((tag, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                navigate('/room/shareReward');
              }}
              className="relative w-[103px] h-[142px] rounded-[20px] bg-[#ffffff]"
            >
              <div className="absolute bottom-0 w-full h-[37px] bg-[#FFC655] rounded-bl-[20px] rounded-br-[20px]">
                <p className="text-white text-center font-bold text-xs">
                  {tag}
                </p>
                <p className="flex flex-col justify-center text-white text-center font-medium text-xs font-pretendard">
                  2024.11.29
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SpecialRewards;
