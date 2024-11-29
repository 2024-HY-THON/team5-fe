import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000; /* 오버레이가 다른 요소 위에 표시되도록 설정 */
`;

export const AgreementContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 393px;
  height: 408px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
`;

export const Logo = styled.img`
  width: 83px;
  height: 34px;
  transform: translateY(-50px);
`;

export const StarImage = styled.img`
  width: 117px;
  height: 116px;
  margin-top: 40px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 6px 0;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  color: #666666;
  margin: 0;
`;

export const Input = styled.input`
  width: 80%;
  padding: 15px;
  margin: 16px 0;
  border: 1px solid #cccccc;
  border-radius: 40px; /* 더 동그랗게 */
  font-size: 15px;
  background-color: #f0f0f0; /* 회색 배경 */
`;

export const Button1 = styled.button`
  width: 80%;
  padding: 12px;
  margin-top: 100px;
  background-color: #ffc655;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e6b800;
  }
`;

export const Button2 = styled.button`
  width: 80%;
  padding: 12px;
  background-color: #ffcc00;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 5%;

  &:hover {
    background-color: #e6b800;
  }
`;

export const CheckContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  position: relative;

  &:checked {
    background-color: #ffcc00;
    border-color: #ffcc00;
  }

  &:checked::after {
    content: '✔️'; /* 체크 표시 추가 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

export const Message = styled.div`
  margin-top: 10px; /* 버튼과 메시지 사이의 여백 */
  color: green;
  font-size: 16px;
  text-align: center;
`;

export const SmallText = styled.div`
  font-size: 14px;
  color: #333;
  margin-left: 8%;
`;

export const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 8px;
`;
