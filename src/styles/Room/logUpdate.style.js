import styled from 'styled-components';

export const Tag = styled.button`
  width: fit-content;
  height: 30px;
  padding: 10px 15px;
  border-radius: 32px;
  background-color: ${(props) => (props?.isSelected ? '#FFC655' : '#ebebeb')};
  color: ${(props) => props?.isSelected && 'white'} !important;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
