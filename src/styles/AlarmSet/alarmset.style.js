import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 83px;
  height: 34px;
  margin-top: 55px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #525252;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const OptionText = styled.span`
  font-size: 16px;
  color: #333;
  margin-left: 5px;
  font-weight: bold;
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  position: relative;
  margin-right: 5px;

  &:checked {
    background-color: #ffcc00;
    border-color: #ffcc00;
  }

  &:checked::after {
    content: '✔️';
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

export const Description = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 34px;
  transform: translateY(-10px);
`;

export const ConfirmButton = styled.button`
  background-color: #ffc655;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 16px 25px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 100px;

  &:hover {
    background-color: #ffa726;
  }
`;
