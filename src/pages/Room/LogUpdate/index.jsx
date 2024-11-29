import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../../styles/Room/room.style';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import Header from '../../../components/Room/LogUpdate/Header';
import TagSection from '../../../components/Room/LogUpdate/TagSection';

const LogUpdate = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.RoomHeader className="flex">
        <div className="mr-auto w-[30px]" />
        <h4>별록 수정하기</h4>
        <button
          className="ml-auto pr-[10px]"
          type="button"
          onClick={() => navigate(-1)}
        >
          <img
            src={CLOSE_BUTTON_ICON}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.RoomWrapper>
        <Header />
        <TagSection />
      </S.RoomWrapper>
    </>
  );
};

export default LogUpdate;
