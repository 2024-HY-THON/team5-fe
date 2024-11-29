import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0%;
  width: 100%;
  height: 145px;
  background-color: #fff;
  z-index: 10;
`;

export const Button = styled.button`
  padding: 21px 0px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50px;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;

  position: absolute;
  width: calc(100vw - 40px);
  bottom: 82px;
`;
