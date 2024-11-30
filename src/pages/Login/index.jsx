import React, { useEffect } from 'react';
import {
  PageContainer,
  SocialButton,
  ButtonContainer,
} from '../../styles/Login/login.style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const apiUrl = 'http://localhost:8080';
  const navigate = useNavigate();

  const handleNaverLogin = () => {
    window.location.href = `${apiUrl}/oauth2/authorization/naver`;
  };

  const handleLoginSuccess = () => {
    navigate('/signin');
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      handleLoginSuccess();
    }
  }, [navigate]);

  return (
    <PageContainer>
      <img
        src="/assets/img/logo.svg"
        alt="로고 이미지"
        style={{ width: '100px', height: '50px' }}
      />
      <img
        src="/assets/img/yellowstar.svg"
        alt="별 이미지"
        style={{ width: '300px', height: '300px', marginBottom: '10px' }}
      />
      <ButtonContainer>
        <SocialButton
          style={{ backgroundColor: '#00C300' }}
          onClick={handleNaverLogin}
        >
          <img
            src="/assets/img/naver.svg"
            alt="네이버 아이콘"
            style={{ marginRight: '8px', width: '40px', height: '40px' }}
          />
          네이버로 로그인
        </SocialButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default Login;
