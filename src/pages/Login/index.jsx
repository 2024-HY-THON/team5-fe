import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  SocialButton,
  ButtonContainer,
} from '../../styles/Login/login.style';
// import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  // 네이버 로그인 버튼 클릭 시 호출되는 함수
  const handleNaverLogin = () => {
    console.log('url????', apiUrl, navigate);
    // window.location.href = `${apiUrl}/oauth2/authorization/naver`;
  };

  // 네이버 소셜 로그인 API 호출 함수
  // const socialLogin = async (provider, data) => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8080/ouath2/authorization/${provider}`,
  //       data
  //     );
  //     console.log('login success token:', response?.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error('소셜 로그인 API 호출 중 오류 발생:', error);
  //     throw error;
  //   }
  // };

  // 페이지 로드 시 네이버 소셜 로그인 처리
  // useEffect(() => {
  const clickLogin = () => {
    console.log('url????', apiUrl, navigate);
    // const urlParams = new URLSearchParams(window.location.search);
    // const code = urlParams.get('code');
    // const state = urlParams.get('state');

    // if (code && state) {
    //   const handleSocialLogin = async () => {
    //     try {
    //       const socialResponse = await socialLogin('naver', { code, state });
    //       if (socialResponse.token) {
    //         localStorage.setItem('jwtToken', socialResponse.token);
    //         // 비밀번호 설정 페이지로 리디렉션, 소셜 사용자 여부 전달
    //         navigate('/home', {
    //           state: { title: '비밀번호 설정', isSocialUser: true },
    //         });
    //       }
    //     } catch (error) {
    //       console.error('소셜 로그인 처리 중 오류 발생:', error);
    //     }
    //   };

    //   handleSocialLogin();
    // }
  };
  // }, [navigate]); // navigate를 의존성 배열에 추가

  return (
    <PageContainer>
      <img
        src="/assets/img/logo.svg"
        alt="로고 이미지"
        style={{ width: '100px', height: '50px' }}
      />
      <img
        src="/assets/img/yellowstar.svg"
        alt="별별 이미지"
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
        <SocialButton
          onClick={clickLogin}
          style={{ backgroundColor: 'white', border: '1px solid #d1d1d1' }}
        >
          <img
            src="/assets/img/google.svg"
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
