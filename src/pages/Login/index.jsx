import React from 'react';
import {
  PageContainer,
  SocialButtonContainer,
  SocialButton,
  StartButton,
  StartButtonContainer,
} from '../../styles/Login/login.style';

const Login = () => {
  return (
    <PageContainer>
      {/* 로그 이미지 */}
      <img
        src="/"
        alt="로그인 이미지"
        style={{ width: '100%', maxWidth: '300px', marginBottom: '30px' }}
      />

      {/* 소셜 로그인 버튼들 */}
      <SocialButtonContainer>
        <SocialButton>소셜 로그</SocialButton>
        <SocialButton>소셜 로그</SocialButton>
        <SocialButton>소셜 로그</SocialButton>
      </SocialButtonContainer>

      {/* 시작하기 버튼들 */}
      <StartButtonContainer>
        <StartButton>~로 시작하기</StartButton>
        <StartButton>~로 시작하기</StartButton>
        <StartButton>~로 시작하기</StartButton>
      </StartButtonContainer>
    </PageContainer>
  );
};

export default Login;
