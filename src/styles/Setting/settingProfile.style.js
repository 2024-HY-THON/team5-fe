import styled from 'styled-components';
import { screenPadding } from '../../constants/Common/styles';

export const SettingProfileWrapper = styled.div`
  padding: ${screenPadding};

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  top: 0px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GrayCircle = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ChangeIcon = styled.img`
  position: absolute;
  left: 75px;
  top: 70px;
`;

export const DefaultText = styled.span`
  color: #1f1f1f;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;

  margin-top: 30px;
`;

export const NickNameInput = styled.input`
  width: 100%;
  border-radius: 50px;
  background-color: #f2f2f2;

  padding: 23px 30px;

  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin-top: 20px;

  &::placeholder {
    color: #adadad;
  }
  &:focus {
    outline: none;
  }
`;

export const Secession = styled.span`
  color: #adadad;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 21px 0px;
  border-radius: 50px;
  width: 100%;
  background-color: #ffc655;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const BottomWrapper = styled.div`
  position: fixed;
  padding: 0px 20px;
  bottom: 40px;
  width: 100%;
  background-color: #fff;
  background-color: #fff;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 138px);
  grid-template-rows: repeat(2, 138px);
  gap: 10px;

  & > div {
    background-color: #f2f2f2;
    border-radius: 50%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  margin-top: 42px;
`;

export const Question = styled.span`
  color: #525252;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const CheckBox = styled.div`
  position: absolute;
  left: 100px;
  top: 10px;

  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  border-radius: 50%;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  border-radius: 50%;
`;

export const Div = styled.div``;
