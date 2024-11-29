import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../styles/Home/home.style';
import { MAIN_LOGO } from '../../constants/Common/icon';
import DailyBanner from '../../components/Home/DailyBanner';
import RankSection from '../../components/Home/RankSection';
import FriendsSection from '../../components/Home/FriendsSection';
import axios from 'axios';

const Home = () => {
  const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 API URL
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // 쿠키 포함
  });

  const socialLogin = async () => {
    try {
      const response = await apiClient.post('/auth/access-token'); // 백엔드 API 호출
      console.log('Login success, token:', response?.data); // 응답 데이터 확인
      return response.data; // 데이터 반환
    } catch (error) {
      console.error('Error during social login API call:', error); // 에러 로그
      throw error;
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await socialLogin();
        console.log('Access token received:', token); // 토큰 확인
        localStorage.setItem('jwtToken', token?.data1?.access);

        return token?.data1?.access;
      } catch (error) {
        console.error('Error during token fetch:', error); // 에러 로그
      }
    };

    fetchToken(); // useEffect 내에서 async 함수를 호출


  }, []); // 빈 배열로 설정하여 최초 렌더링 시 한 번 실행

  return (
    <>
      <S.HomeHeader>
        <img
          src={MAIN_LOGO}
          alt="logo"
          style={{ width: '83px', height: '35px' }}
        />
      </S.HomeHeader>
      <S.HomeWrapper>
        <Link to="/login">
          <button>로그인 페이지로 가기</button>
        </Link>
        {/*<button className='w-fit h-fit' onClick={}>*/}

        {/*</button>*/}
        <DailyBanner />
        <RankSection />
        <FriendsSection />
      </S.HomeWrapper>
    </>
  );
};

export default Home;
