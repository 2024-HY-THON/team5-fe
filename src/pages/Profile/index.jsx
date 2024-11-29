import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  ProfileOption,
  ProfileImage,
  UseProfileButton,
  Logo,
  ProfileContainer,
} from '../../styles/Profile/profile.style';

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState(1);
  const navigate = useNavigate();

  const profiles = [
    { id: 1, src: '/assets/img/yellowstar.svg' },
    { id: 2, src: '/assets/img/bluestar.svg' },
    { id: 3, src: '/assets/img/redstar.svg' },
    { id: 4, src: '/assets/img/purplestar.svg' },
  ];

  useEffect(() => {
    setSelectedProfile(1);
  }, []);

  const handleProfileSelect = (id) => {
    setSelectedProfile(id);
  };

  const handleUseProfile = () => {
    if (selectedProfile) {
      localStorage.setItem('selectedProfile', selectedProfile);
      navigate('/alarmset');
    } else {
      alert('프로필을 선택해 주세요.');
    }
  };

  return (
    <Container>
      <Logo src="/assets/img/logo.svg" alt="별별 로고" />
      <Title>마음에 드는</Title>
      <Title>프로필을 선택하세요</Title>
      <ProfileContainer>
        {profiles.map((profile) => (
          <ProfileOption
            key={profile.id}
            onClick={() => handleProfileSelect(profile.id)}
            className={selectedProfile === profile.id ? 'selected' : ''}
          >
            <ProfileImage src={profile.src} alt={`Profile ${profile.id}`} />
          </ProfileOption>
        ))}
      </ProfileContainer>
      <UseProfileButton onClick={handleUseProfile}>
        이 프로필 사용하기
      </UseProfileButton>
    </Container>
  );
};

export default Profile;
