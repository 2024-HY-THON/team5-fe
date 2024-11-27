import React from 'react';
import { Link } from 'react-router-dom';
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

      {/* 로그인 페이지로 이동하는 링크 */}
      <Link to="/login">
        <button>로그인 페이지로 가기</button>
      </Link>
    </S.HomeWrapper>
  );
};

export default Home;
