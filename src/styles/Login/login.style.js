// login.style.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #d1d1d1;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
  border: none;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

export const SocialButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  border: none;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StartButton = styled.button`
  width: 200px;
  padding: 15px;
  background-color: #d1d1d1;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;
