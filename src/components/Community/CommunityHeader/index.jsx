import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Community/communityHeader.style';
// assets
import { FRIENDLIST_ICON } from '../../../constants/Community/icon';

const Header = ({ header }) => {
  const navigate = useNavigate();

  return (
    <S.HeaderWrapper>
      <div style={{ width: '30px', height: '30px' }}></div>
      <S.HeaderSpan>{header}</S.HeaderSpan>
      <S.HeaderButton
        src={FRIENDLIST_ICON}
        alt="arrow"
        onClick={() => navigate('/friend')}
      />
    </S.HeaderWrapper>
  );
};

export default Header;
