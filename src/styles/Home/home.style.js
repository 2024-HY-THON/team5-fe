import styled from 'styled-components';
import { screenPadding } from '../../constants/Common/styles';

export const HomeWrapper = styled.body`
  overflow-y: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: fit-content;
  padding: ${screenPadding};
`;

export const HomeHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: left;
`;

export const HomeBanner = styled.div`
  width: 100%;
  height: 110px;
  min-height: 110px;
  border-radius: 20px;
  background: #f2f2f2;
  align-items: center;
`;

export const BannerContent = styled.div`
  height: 100%;
  display: flex;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
