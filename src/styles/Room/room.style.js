import styled from 'styled-components';
import { screenPadding } from '../../constants/Common/styles';

export const RoomWrapper = styled.body`
  overflow-y: auto;
  background-color: ${(props) => props.styles?.bg || '#ffffff'};
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100vh;
  padding: ${screenPadding};
  padding-bottom: ${(props) => props.styles?.isMain && '80px'};
  position: static;
`;

export const DIYWrapper = styled.body`
  background-color: ${(props) => props.styles?.bg || '#ffffff'};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: ${screenPadding};
  padding-bottom: ${(props) => props.styles?.isMain && '80px'};
  position: static;
`;

export const ExitWrapper = styled.body`
  background-color: ${(props) => props.styles?.bg || '#ffffff'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: ${screenPadding};
  padding-bottom: ${(props) => props.styles?.isMain && '80px'};
  position: static;
`;
export const RoomHeader = styled.header`
  width: 100%;
  min-height: 54px;
  height: 54px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`;
