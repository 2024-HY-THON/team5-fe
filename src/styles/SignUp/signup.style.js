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
  transform: translateY(-100px);
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const Nickname = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;

export const GoToProfileButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ff4c4c;
  }
`;


