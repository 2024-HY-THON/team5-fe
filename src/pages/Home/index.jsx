import React from 'react';
import * as S from '../../styles/Home/home.style';
import {
  CommonGreyBox,
  TempCardWrapper,
} from '../../styles/Common/common.style';
import CardSection from '../../components/Common/CardSection';

const Home = () => {
  return (
    <S.HomeWrapper>
      <CommonGreyBox />
      <CardSection header="이번 주 핫한 별록 >">
        <TempCardWrapper styles={{ columns: 2, rows: 2 }}>
          <CommonGreyBox />
          <CommonGreyBox />
          <CommonGreyBox />
          <CommonGreyBox />
        </TempCardWrapper>
      </CardSection>
      <CardSection header="내 친구 상장">
        <TempCardWrapper styles={{ columns: 3, rows: 1 }}>
          <CommonGreyBox />
          <CommonGreyBox />
          <CommonGreyBox />
        </TempCardWrapper>
      </CardSection>
    </S.HomeWrapper>
  );
};

export default Home;
