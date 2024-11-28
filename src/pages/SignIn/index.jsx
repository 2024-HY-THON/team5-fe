import React, { useState } from 'react';
import {
  Container,
  Logo,
  Title,
  SubTitle,
  Input,
  Button,
} from '../../styles/SignIn/signin.style';

const SignIn = () => {
  const [nickname, setNickname] = useState('');

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    console.log('사용할 닉네임:', nickname);
  };

  return (
    <Container>
      <Logo src="/logo.png" alt="별별 로고" />
      <img src="/star.png" alt="Star" />
      <Title>반가워요!</Title>
      <SubTitle>사용할 닉네임을 입력해 주세요</SubTitle>
      <Input
        type="text"
        value={nickname}
        onChange={handleInputChange}
        placeholder="2-8자 이내 한글 또는 영문"
      />
      <Button onClick={handleSubmit}>이 닉네임 사용하기</Button>
    </Container>
  );
};

export default SignIn;
