import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 80px;
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 50px;
  font-size: 18px;
  color: black;
  cursor: pointer;
  border: none;
`;
