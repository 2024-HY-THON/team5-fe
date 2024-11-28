import React from 'react';
import ScrollCards from './ScrollCards';

const FriendsSection = () => {
  return (
    <div className="flex flex-col gap-y-[15px] ">
      <div>
        <h2>내 친구들은</h2>
        <h2>어떤 상을 받았을까?</h2>
      </div>
      <ScrollCards />
    </div>
  );
};

export default FriendsSection;
