import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friend-header.style';
// assets
import { ArrowIcon } from '../../../constants/Friend/icon';

const Header = ({ header }) => {
  const navigate = useNavigate();

  return (
    <S.HeaderWrapper>
      <S.HeaderButton
        src={ArrowIcon}
        alt="arrow"
        onClick={() => navigate(-1)}
      />
      <S.HeaderSpan>{header}</S.HeaderSpan>
      <div></div>
    </S.HeaderWrapper>
  );
};

export default Header;
