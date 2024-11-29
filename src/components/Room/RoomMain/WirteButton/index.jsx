import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WRITE_BUTTON_ICON } from '../../../../constants/Common/icon';

const WriteButton = () => {
  const navigate = useNavigate();
  const clickWrite = () => {
    navigate('/room/createLog');
  };
  return (
    <button
      type="button"
      onClick={clickWrite}
      className="absolute right-[20px] bottom-[90px] rounded-full w-[60px] h-[60px] flex items-center justify-center bg-[#ffc655]"
    >
      <img src={WRITE_BUTTON_ICON} alt="write" className="w-[30px] h-[30px]" />
    </button>
  );
};

export default WriteButton;
