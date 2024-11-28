import styled from 'styled-components';

export const HomeWrapper = styled.body`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const HomeHeader = styled.header`
  background-color: #fff;
  min-height: 50px;
  padding: 20px;
  display: flex;
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
