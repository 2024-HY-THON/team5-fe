import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 40px; /* 로고와 다음 요소 간의 간격 */
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 16px 0;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  color: #666666;
  margin: 8px 0;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: 16px 0;
  border: 1px solid #cccccc;
  border-radius: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 80%;
  padding: 13px;
  background-color: #ffcc00;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;

  &:hover {
    background-color: #e6b800;
  }
`;
