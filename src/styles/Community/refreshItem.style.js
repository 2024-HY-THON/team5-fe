import styled from 'styled-components';

export const RefreshItemWrapper = styled.div`
  height: 100vh;
  display: flex;
  gap: 15px;
  flex-direction: column;

  background-color: #f2f2f2;
  padding: 24px 20px;
`;

export const Content = styled.div`
  width: 100%;
  height: 125px;
  background-color: #fff;

  border-radius: 20px;
  padding: 22px 30px;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ContentTitle = styled.span`
  color: #ffc655;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const ContentDate = styled.span`
  color: #adadad;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
`;

export const ContentDiv = styled.div`
  width: 166px;
  color: #1f1f1f;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */

  overflow-y: hidden;
`;

export const ContentDivWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ContentButton = styled.button`
  padding: 5px 14px;

  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background-color: #f2f2f2;

  & > span {
    color: #1f1f1f;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const GrayCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInner = styled.div`
  width: calc(100vw - 40px);
  height: 237px;

  padding: 24px 18px;
  position: relative;
`;

export const ModalNameDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalName = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const ModalDate = styled.span`
  color: #adadad;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
`;

export const ModalHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const ModalStar = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  & > span {
    color: #ffc655;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  & > div {
    color: #1f1f1f;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
  }
`;

export const LottileContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  position: absolute;
  top: 0%;
  & > div {
    width: 222px;
    height: 222px;
  }

  background-color: none;
`;
