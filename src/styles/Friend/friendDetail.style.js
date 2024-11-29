import styled from 'styled-components';
import { screenPadding } from '../../constants/Common/styles';

export const FriendDetailWrapper = styled.div`
  padding: ${screenPadding};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const FriendDetailText = styled.div`
  color: #1f1f1f;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FriendDetailGrayCircle = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  border: none;
  border-radius: 50%;
  background-color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FriendDetailGrade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`;

export const FriendDetailGradeCount = styled.span`
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const FreindDetailExitButton = styled.img`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 16px;
  right: 20px;
`;
