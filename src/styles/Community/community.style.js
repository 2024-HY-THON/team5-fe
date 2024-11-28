import styled from 'styled-components';

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  background-color: #f2f2f2;

  margin: -16px -20px; // 패딩값 초기화
  width: 100vw; // 전체 너비 반영
`;

export const CommunityCategoryBox = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 22px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const CommunityCategory = styled.button`
  padding: 3px 15px;
  background-color: ${(props) => (props.selected ? '#FFC655' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  // 선택된 버튼은 다른 색상으로 변경

  border: none;
  border-radius: 32px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

export const CommunityContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: #fff;
  padding: 0px 20px;
  padding-bottom: 20px;
`;

export const CommunityContentHeader = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CommunityContent = styled.div`
  height: 92px;
  border-radius: 27px;

  padding: 20px 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    width: 47px;
    height: 44px;
  }

  & > div {
    width: 160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  & > button {
    height: 34px;
    padding: 5px 12px;

    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-radius: 36px;
    background-color: #fff;

    & > span {
      color: #1f1f1f;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const CommunityContentTitle = styled.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CommunityContentText = styled.div`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommunityContentLists = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
`;

export const CommunityContentList = styled.div`
  height: 90px;
  padding: 24px 30px;
  border-bottom: 1px solid #adadad;

  display: flex;
  flex-direction: column;
  gap: 8px;
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
    line-height: normal;
  }
`;
