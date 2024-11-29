import React from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friendHeader';
// assets
import { ARROW_ICON } from '../../../constants/Friend/icon';

const Header = ({ header, onClickFunc }) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    if (onClickFunc) {
      onClickFunc(false);
    } else {
      navigate(-1);
    }
  };
  return (
    <S.HeaderWrapper>
      <S.HeaderButton
        src={ARROW_ICON}
        alt="arrow"
        onClick={() => handleOnclick()}
      />
      <S.HeaderSpan>{header}</S.HeaderSpan>
      <div style={{ width: '30px' }}></div>
    </S.HeaderWrapper>
  );
};

export default Header;
