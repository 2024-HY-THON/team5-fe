import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STAR_YELLOW } from '../../../../constants/Common/icon';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center justify-between">
        <div className="w-[47px] h-[44px]">
          <img src={STAR_YELLOW} alt="STAR_YELLOW" className="w-full h-full" />
        </div>
        <button
          className="w-fit h-fit"
          onClick={() => navigate('/room/update')}
        >
          <h4 className="font-[#525252]">수정하기</h4>
        </button>
      </div>
      <div>
        <h2>2024년 11월 29일</h2>
        <h2>첫 번째 별록</h2>
      </div>
      <div className="w-[99px] h-[41px] gap-[10px] rounded-[32px] bg-[#FFC655] flex items-center justify-center">
        <h2 className="text-white">#태그</h2>
      </div>
    </div>
  );
};

export default Header;
