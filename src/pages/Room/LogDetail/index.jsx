import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../../styles/Room/room.style';
import { BACK_ARROW_ICON } from '../../../constants/Common/icon';
import Header from '../../../components/Room/LogDetail/Header';
import ContentBox from '../../../components/Room/LogDetail/ContentBox';
import StampInfo from '../../../components/Room/LogDetail/StampInfo';

const LogDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.RoomHeader>
        <button
          className="mr-auto pl-[10px]"
          type="button"
          onClick={() => navigate('..')}
        >
          <img
            src={BACK_ARROW_ICON}
            alt="back"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.RoomWrapper>
        <Header />
        <ContentBox />
        <StampInfo />
      </S.RoomWrapper>
    </>
  );
};

export default LogDetail;
