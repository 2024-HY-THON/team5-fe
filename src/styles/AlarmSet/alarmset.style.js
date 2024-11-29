import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 유지 */
  justify-content: flex-start; /* 위쪽 정렬 */
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px; /* 여백 추가 */
  font-family: 'Pretendard', sans-serif; /* Pretendard 폰트 설정 */
`;

export const Logo = styled.img`
  width: 83px;
  height: 34px;
  margin-top: 55px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #525252;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  width: 100%; /* 전체 너비 사용 */
  margin-top: 40px;
`;

export const Option = styled.label`
  display: flex;
  align-items: center; /* 수평 정렬 */
  margin: 10px 0;
`;

export const OptionText = styled.span`
  font-size: 16px; /* 글씨 크기 조정 */
  color: #333; /* 글씨 색상 조정 */
  margin-left: 5px; /* 체크박스와 텍스트 간격을 좁힘 */
  font-weight: bold;
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  position: relative;
  margin-right: 5px; /* 텍스트와의 간격 조정 */

  &:checked {
    background-color: #ffcc00;
    border-color: #ffcc00;
  }

  &:checked::after {
    content: '✔️'; /* 체크 표시 추가 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;

export const Description = styled.span`
  font-size: 14px; /* 설명 글씨 크기 조정 */
  color: #666; /* 설명 색상 조정 */
  margin-left: 34px; /* 체크박스와 설명 간격 조정 */
  transform: translateY(-10px);
`;

export const ConfirmButton = styled.button`
  background-color: #ffc655;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 25px; /* 패딩 조정 */
  font-size: 16px;
  cursor: pointer;
  width: 100%; /* 버튼을 전체 너비로 설정 */
  margin-top: 100px;

  &:hover {
    background-color: #ffa726;
  }
`;
