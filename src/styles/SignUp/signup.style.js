import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  width: 83px;
  height: 34px;
  transform: translateY(-30px);
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #525252;
`;

export const ProfileContainer = styled.div`
  background-color: #f0f0f0; /* 회색 배경 */
  border-radius: 50%; /* 동그란 모양 */
  padding: 20px; /* 여백 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px; /* 프로필과 닉네임 사이의 여백 */
`;

export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
`;

export const Nickname = styled.p`
  font-size: 24px;
  color: #1f1f1f;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const GoToProfileButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  margin-top: 70px;
  border-radius: 50px;
  width: 80%;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ff4c4c;
  }
`;
