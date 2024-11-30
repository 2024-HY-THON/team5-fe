import styled from 'styled-components';

export const SettingWrapper = styled.div`
  padding: 16px 20px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  left: 50px;
  top: 50px;
`;

export const Header = styled.span`
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  position: absolute;
  top: 16px;
`;

export const NickName = styled.span`
  color: #1f1f1f;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  margin-top: 16px;
`;

export const EditButton = styled.button`
  padding: 3px 15px;

  border: none;
  border-radius: 32px;
  background-color: #525252;

  color: #fff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  margin-top: 15px;
`;

export const FriendButton = styled.button`
  padding: 16px 30px;

  border: none;
  border-radius: 40px;
  background-color: #ffc655;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;

  margin-top: 53px;
`;

export const MedalWrapper = styled.div`
  display: flex;
  gap: 30px;

  margin-top: 35px;
`;

export const Medal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`;

export const MedalCount = styled.span`
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 35px;

  & > span,
  & > button > span {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
  }
`;
