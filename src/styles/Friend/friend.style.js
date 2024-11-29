import styled from 'styled-components';

export const FriendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  height: fit-content;
  overflow-y: auto;
`;

export const RequestButton = styled.button`
  border: none;
  border-radius: 30px;
  background: #f2f2f2;

  padding: 5px 15px 5px 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
  margin-bottom: 40px;
`;

export const FriendLists = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendList = styled.div`
  height: 78px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FriendListProfile = styled.div`
  width: 60px;
  height: 60px;

  border: none;
  border-radius: 50%;

  background-color: #f2f2f2;
  margin-right: 15px;
`;

export const FriendListNickname = styled.span`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  margin-right: auto;
`;

export const FriendButton = styled.img`
  width: 30px;
  height: 30px;
`;

export const FixedButton = styled.button`
  width: 70px;
  height: 70px;

  border: none;
  border-radius: 50%;

  background-color: #ffc655;

  position: fixed;
  right: 24px;
  bottom: 55px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FriendRequests = styled.div`
  display: flex;
  gap: 15px;
`;
