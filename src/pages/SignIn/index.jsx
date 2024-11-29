import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Logo,
  StarImage,
  Title,
  SubTitle,
  Input,
  Button1,
  Button2,
  CheckContainer,
  CheckBox,
  Label,
  AgreementContainer,
  Overlay,
  Message,
  SmallText,
  ErrorText,
} from '../../styles/SignIn/signin.style';

const SignIn = () => {
  const [nickname, setNickname] = useState('');
  const [isChecked, setIsChecked] = useState({
    all: false,
    terms: false,
    privacy: false,
    email: false,
  });
  const [isAgreementVisible, setAgreementVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNickname(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (nickname.length < 2 || nickname.length > 8) {
      setError('닉네임은 2-8자 이내로 입력해 주세요.');
      return;
    }
    console.log('사용할 닉네임:', nickname);
    localStorage.setItem('nickname', nickname);
    setAgreementVisible(true);
  };

  const handleCheck = (e) => {
    const { name } = e.target;
    setIsChecked((prev) => {
      const newCheckedState = {
        ...prev,
        [name]: !prev[name],
        all: false, // 전체 동의는 해제
      };

      if (
        newCheckedState.terms &&
        newCheckedState.privacy &&
        newCheckedState.email
      ) {
        newCheckedState.all = true;
      } else {
        newCheckedState.all = false;
      }

      return newCheckedState;
    });
  };

  const handleAllCheck = () => {
    const newState = !isChecked.all;
    setIsChecked({
      all: newState,
      terms: newState,
      privacy: newState,
      email: newState,
    });
  };

  const handleAgree = () => {
    if (isChecked.terms || isChecked.privacy || isChecked.email) {
      setMessage('동의가 완료되었습니다!');
      navigate('/profile');
    } else {
      setMessage('최소 하나의 동의 항목을 선택해야 합니다.');
    }
  };

  return (
    <Container>
      <Logo src="/assets/img/logo.svg" alt="별별 로고" />
      <StarImage src="/assets/img/yellowstar.svg" alt="Star" />
      <Title>반가워요!</Title>
      <SubTitle>사용할 닉네임을</SubTitle>
      <SubTitle>입력해 주세요</SubTitle>
      <Input
        type="text"
        value={nickname}
        onChange={handleInputChange}
        placeholder="2-8자 이내 한글 또는 영문"
      />
      <Button1 onClick={handleSubmit}>이 닉네임 사용하기</Button1>
      {error && <ErrorText>{error}</ErrorText>}

      {isAgreementVisible && (
        <Overlay>
          <AgreementContainer>
            <CheckContainer>
              <CheckBox
                type="checkbox"
                name="all"
                checked={isChecked.all}
                onChange={handleAllCheck}
              />
              <Label>전체 동의</Label>
              <br />
              <CheckBox
                type="checkbox"
                name="terms"
                checked={isChecked.terms}
                onChange={handleCheck}
              />
              <Label>[필수] 이용약관 동의</Label>
              <br />
              <CheckBox
                type="checkbox"
                name="privacy"
                checked={isChecked.privacy}
                onChange={handleCheck}
              />
              <Label>[필수] 개인정보 수집 및 이용 동의</Label>
              <br />
              <CheckBox
                type="checkbox"
                name="email"
                checked={isChecked.email}
                onChange={handleCheck}
              />
              <Label>[선택] E-mail 수신 동의</Label>
              <br />
              <SmallText>
                나의 상장, 친구의 별록 정보 등을 보내드려요.
              </SmallText>
              <br />
            </CheckContainer>
            <Button2 onClick={handleAgree} style={{ marginLeft: '10%' }}>
              동의하기
            </Button2>
            {message && <Message>{message}</Message>}
          </AgreementContainer>
        </Overlay>
      )}
    </Container>
  );
};

export default SignIn;
