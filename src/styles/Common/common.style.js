import styled from 'styled-components';

export const CommonWrapper = styled.div`
  height: 100vh;
  padding-bottom: 70px;
  background-color: #ffffff;
  padding: 16px 20px;
`;

export const CommonHeader = styled.header`
  background-color: #fff;
  border: 1px solid #181818;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const CommonGreyBox = styled.div`
  background: #d9d9d9;
  border-radius: 27px;

  width: ${(props) => props.styles?.width || '100%'};
  height: ${(props) => props.styles?.height || '171px'};
`;

export const TempCardWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${(props) =>
    props.styles?.columns
      ? `repeat(${props.styles.columns}, 1fr)`
      : 'repeat(3, 1fr)'};

  grid-template-rows: ${(props) =>
    props.styles?.rows
      ? `repeat(${props.styles.rows}, 1fr)`
      : 'repeat(2, 1fr)'};
`;

export const TempSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TempSectionHeader = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
`;
