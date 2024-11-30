import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  ProfileContainer,
  ProfileImage,
  Nickname,
  GoToProfileButton,
  Logo,
} from '../../styles/SignUp/signup.style';

const SignUp = () => {
  const navigate = useNavigate();
  const selectedProfile = localStorage.getItem('selectedProfile');
  const nickname = localStorage.getItem('nickname');
  const profiles = {
    1: '/assets/img/yellowstar.svg',
    2: '/assets/img/bluestar.svg',
    3: '/assets/img/redstar.svg',
    4: '/assets/img/purplestar.svg',
  };

  const profileSrc = profiles[selectedProfile] || profiles[1];

  const generateRandomNumber = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('code', rand);
    return rand;
  };

  const randomNumber = generateRandomNumber();

  const handleGoToProfile = () => {
    navigate('/');
  };

  return (
    <Container>
      <Logo src="/assets/img/logo.svg" alt="별별 로고" />
      <Title>프로필 생성이</Title>
      <Title>완료되었어요 :)</Title>
      <ProfileContainer>
        <ProfileImage src={profileSrc} alt="선택된 프로필" />
      </ProfileContainer>
      <Nickname>
        {nickname ? `${nickname} #${randomNumber}` : '닉네임 없음'}
      </Nickname>
      <GoToProfileButton onClick={handleGoToProfile}>
        별록 보러가기
      </GoToProfileButton>
    </Container>
  );
};

export default SignUp;
