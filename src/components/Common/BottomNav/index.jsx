import React from 'react';
import { navContents } from '../../../constants/Common/navContents';
import LinkButton from './LinkButton';
import { BottomBox } from '../../../styles/Common/common.style';

const BottomNav = () => {
  return (
    <BottomBox>
      {navContents?.map((nav, index) => (
        <LinkButton key={index} nav={nav} />
      ))}
    </BottomBox>
  );
};

export default BottomNav;
