import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Logo,
  Title,
  Option,
  OptionText,
  ConfirmButton,
  CheckBox,
  Description,
  OptionsContainer,
} from '../../styles/AlarmSet/alarmset.style'; // 스타일 파일 경로

const AlarmSet = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 체크박스 상태 관리
  const [notifications, setNotifications] = useState({
    all: false,
    myProfile: false,
    dailyQuestion: false,
    friendProfile: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === 'all') {
      setNotifications({
        all: checked,
        myProfile: checked,
        dailyQuestion: checked,
        friendProfile: checked,
      });
    } else {
      setNotifications({ ...notifications, [name]: checked });
    }
  };

  const handleConfirm = () => {
    // '가입 완료' 페이지로 이동
    navigate('/signup');
  };

  return (
    <Container>
      <Logo src="/assets/icon/logo.svg" alt="별별 로고" />
      <Title>알림을 보내드릴게요</Title>
      <OptionsContainer>
        <Option>
          <CheckBox
            type="checkbox"
            name="all"
            checked={notifications.all}
            onChange={handleChange}
          />
          <OptionText>모든 알림 받기</OptionText>
        </Option>
        <Option>
          <CheckBox
            type="checkbox"
            name="myProfile"
            checked={notifications.myProfile}
            onChange={handleChange}
          />
          <OptionText>내 별록 반응 알림 받기</OptionText>
        </Option>
        <Description>누군가 내 별록에 반응을 남기면 알림드려요</Description>

        <Option>
          <CheckBox
            type="checkbox"
            name="dailyQuestion"
            checked={notifications.dailyQuestion}
            onChange={handleChange}
          />
          <OptionText>데일리 질문 알림 받기</OptionText>
        </Option>
        <Description>매일 새로운 질문을 보내드려요</Description>

        <Option>
          <CheckBox
            type="checkbox"
            name="friendProfile"
            checked={notifications.friendProfile}
            onChange={handleChange}
          />
          <OptionText>친구 별록 알림 받기</OptionText>
        </Option>
        <Description>친구가 별록을 작성하면 알림드려요</Description>
      </OptionsContainer>

      <ConfirmButton onClick={handleConfirm}>알림 설정하기</ConfirmButton>
    </Container>
  );
};

export default AlarmSet;
