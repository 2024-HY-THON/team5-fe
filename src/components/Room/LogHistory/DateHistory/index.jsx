import React from 'react';
import { STAR_ICON } from '../../../../constants/Common/icon';

const DateHistory = ({ data }) => {
  return (
    <div className="flex flex-col gap-[10px] w-full min-w-[265px]">
      <h3 className="pl-[10px]">{data.date}</h3>
      {data.log.map((contents, index) => (
        <div
          key={index}
          className="flex justify-between w-full h-[125px] px-[20px] py-[18px] rounded-[20px] bg-[#ffffff]"
        >
          <div className="flex flex-col">
            <h2 className="text-[#FFC655]">#{contents.tag}</h2>
            <div className="w-[166px] h-[54px]">{contents.content}</div>
          </div>
          <div className="flex flex-col  justify-between items-end">
            <div className="w-[60px] h-[60px] rounded-[10px] bg-[#d9d9d9]" />
            <div className="flex items-center justify-center h-[19px]">
              <img src={STAR_ICON} alt="stamp" className="w-[19px] h-[19px]" />
              <p>12</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DateHistory;
