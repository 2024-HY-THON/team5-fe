import React from 'react';
import { navContents } from '../../../constants/Common/navContents';
import LinkButton from './LinkButton';

const BottomNav = () => {
  return (
    <div className="w-full h-[104px] fixed bottom-0 bg-white flex justify-between px-[50px] pt-[15px]">
      {navContents?.map((nav, index) => (
        <LinkButton key={index} nav={nav} />
      ))}
    </div>
  );
};

export default BottomNav;
