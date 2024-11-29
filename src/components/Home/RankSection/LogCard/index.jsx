import React from 'react';
import { CommonCard } from '../../../../styles/Common/common.style';

const LogCard = ({ background, tag, content }) => {
  return (
    <CommonCard
      className="content-end"
      styles={{ 'border-radius': '20px', background }}
    >
      <div className="w-full p-[20px] flex flex-col text-white gap-[5px]">
        <h2 className="text-white">#{tag || '태그'}</h2>
        <div className="w-full h-[38px]">
          <p className="line-clamp-2">
            {content || '별록 내용 별록 내용 별록 내용 별록 내용용용'}
          </p>
        </div>
      </div>
    </CommonCard>
  );
};
export default LogCard;
