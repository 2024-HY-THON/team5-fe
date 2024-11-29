import React from 'react';
import * as S from '../../../styles/Friend/bottomButton.style';

const BottomButton = ({ text, color, onClick }) => {
  return (
    <S.ButtonWrapper>
      <S.Button style={{ backgroundColor: color }} onClick={onClick}>
        {text}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default BottomButton;
