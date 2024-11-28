import React from 'react';
import { CommonCard } from '../../../../styles/Common/common.style';

const ScrollCards = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex w-fit gap-x-[10px] overflow-x-auto">
        {/** dummy data */}
        <CommonCard
          styles={{
            'border-radius': '20px',
            width: '103px',
            height: '142px',
          }}
        />
        <CommonCard
          styles={{
            'border-radius': '20px',
            width: '103px',
            height: '142px',
          }}
        />
        <CommonCard
          styles={{
            'border-radius': '20px',
            width: '103px',
            height: '142px',
          }}
        />
        <CommonCard
          styles={{
            'border-radius': '20px',
            width: '103px',
            height: '142px',
          }}
        />
        <CommonCard
          styles={{
            'border-radius': '20px',
            width: '103px',
            height: '142px',
          }}
        />
      </div>
    </div>
  );
};

export default ScrollCards;
