import React from 'react';
import { useLocation } from 'react-router-dom';
import { navContents } from '../../../constants/Common/navContents';
import LinkButton from './LinkButton';
import { BottomBox } from '../../../styles/Common/common.style';

const BottomNav = () => {
  const location = useLocation();
  const hiddenPaths = [
    '/room/update',
    '/room/shareReward',
    'signin',
    'login',
    'profile',
    'alarmset',
    'signup',
  ];

  return !hiddenPaths.includes(location.pathname) ? (
    <BottomBox>
      {navContents?.map((nav, index) => (
        <LinkButton key={index} nav={nav} />
      ))}
    </BottomBox>
  ) : null;
};

export default BottomNav;
