import styled from 'styled-components';
import { screenPadding } from '../../constants/Common/styles';

export const RoomWrapper = styled.body`
  overflow-y: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: fit-content;
  padding: ${screenPadding};
  padding-bottom: 80px;
  position: static;
`;

export const RoomHeader = styled.header`
  width: 100%;
  height: 54px;
  background-color: #fff;
  padding: 16px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`;
