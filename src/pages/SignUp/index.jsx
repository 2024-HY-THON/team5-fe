import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  ProfileImage,
  Nickname,
  GoToProfileButton,
  Logo,
} from '../../styles/SignUp/signup.style';

const SignUp = () => {
  const navigate = useNavigate();
  const selectedProfile = localStorage.getItem('selectedProfile');

  const profiles = {
    1: '/assets/icons/star.svg',
    2: '/assets/icons/bluestar.svg',
    3: '/assets/icons/redstar.svg',
    4: '/assets/icons/purplestar.svg',
  };

  const profileSrc = profiles[selectedProfile] || profiles[1]; // 기본 프로필 설정

  const handleGoToProfile = () => {
    navigate('/some-other-page'); // 원하는 페이지로 이동
  };

  return (
    <Container>
      <Logo src="/assets/icon/logo.svg" alt="별별 로고" />
      <Title>프로필 생성이</Title>
      <Title>완료되었어요 :)</Title>
      <ProfileImage src={profileSrc} alt="선택된 프로필" />
      <Nickname>닉네임 #0000</Nickname>
      <GoToProfileButton onClick={handleGoToProfile}>
        별록 보러가기
      </GoToProfileButton>
    </Container>
  );
};

export default SignUp;
