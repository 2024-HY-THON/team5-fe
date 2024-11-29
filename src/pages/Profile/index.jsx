import React, { useState } from 'react';
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
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const profiles = [
    { id: 1, src: '/assets/icons/star.svg' },
    { id: 2, src: '/assets/icons/bluestar.svg' },
    { id: 3, src: '/assets/icons/redstar.svg' },
    { id: 4, src: '/assets/icons/purplestar.svg' },
  ];

  const handleProfileSelect = (id) => {
    setSelectedProfile(id); // 프로필 선택
  };

  const handleUseProfile = () => {
    if (selectedProfile) {
      localStorage.setItem('selectedProfile', selectedProfile);
      console.log('선택한 프로필 ID:', selectedProfile);
      navigate('/alarmset');
    } else {
      alert('프로필을 선택해 주세요.');
    }
  };

  return (
    <Container>
      <Logo src="/assets/icon/logo.svg" alt="별별 로고" />
      <Title>마음에 드는</Title>
      <Title>프로필을 선택하세요</Title>
      <ProfileContainer>
        {profiles.map((profile) => (
          <ProfileOption
            key={profile.id}
            onClick={() => handleProfileSelect(profile.id)} // 프로필 선택
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
