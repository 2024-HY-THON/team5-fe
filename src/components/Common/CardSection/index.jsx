import React from 'react';
import * as S from '../../../styles/Common/common.style';

const CardSection = ({ children, header }) => {
  return (
    <S.TempSectionContainer>
      {header && <S.TempSectionHeader>{header}</S.TempSectionHeader>}
      {children}
    </S.TempSectionContainer>
  );
};

export default CardSection;
