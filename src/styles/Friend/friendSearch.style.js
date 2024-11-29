import styled from 'styled-components';

export const FriendSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  padding: 16px 20px;

  height: fit-content;
`;

export const FriendSearchText = styled.div`
  color: #1f1f1f;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const FriendSearchInput = styled.input`
  background-color: #f2f2f2;

  border: none;
  border-radius: 50px;

  padding: 22px 30px;

  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  &::placeholder {
    color: #adadad;
  }
  &:focus {
    outline: none;
  }
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

export const ModalInner = styled.div`
  padding: 33px 24px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ModalUser = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

export const ModalProfile = styled.div`
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;

  background-color: #f2f2f2;
`;

export const ModalTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const ModalNickname = styled.span`
  color: #1f1f1f;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const ModalQuestion = styled.span`
  color: #adadad;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const ModalButton = styled.button`
  padding: 16px 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 40px;
  background-color: ${(props) => props.color || '#f2f2f2'};

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
