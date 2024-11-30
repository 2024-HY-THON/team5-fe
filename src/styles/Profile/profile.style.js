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
  transform: translateY(-45px);
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #525252;
  margin-bottom: 2px;
  text-align: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 300px;
`;

export const ProfileOption = styled.div`
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  transition: border 0.3s;
  background-color: #f2f2f2;
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 2px solid transparent;

  &.selected {
    border: 4px solid #ffd700;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UseProfileButton = styled.button`
  background-color: #ffc655;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  cursor: pointer;
  width: 90%;
  margin-top: 50px;

  &:hover {
    background-color: #ffa726;
  }
`;
