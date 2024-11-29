import styled from 'styled-components';

export const FriendSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
