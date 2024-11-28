import React from 'react';
import {
  PageContainer,
  SocialButton,
  ButtonContainer,
} from '../../styles/Login/login.style';

const Login = () => {
  return (
    <PageContainer>
      <img
        src="/logo.png"
        alt="로고 이미지"
        style={{ width: '100px', height: '50px' }}
      />
      <img
        src="/star.png"
        alt="별별 이미지"
        style={{ width: '300px', height: '300px', marginBottom: '10px' }}
      />
      <ButtonContainer>
        <SocialButton style={{ backgroundColor: '#00C300' }}>
          <img
            src="/naver.png"
            alt="네이버 아이콘"
            style={{ marginRight: '8px', width: '30px', height: '30px' }}
          />
          네이버로 로그인
        </SocialButton>
        <SocialButton
          style={{ backgroundColor: 'white', border: '1px solid #d1d1d1' }}
        >
          <img
            src="/google.png"
            alt="구글 아이콘"
            style={{ marginRight: '8px', width: '24px', height: '24px' }}
          />
          구글로 로그인
        </SocialButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default Login;
