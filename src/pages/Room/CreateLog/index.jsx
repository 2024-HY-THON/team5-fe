import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../../styles/Room/room.style';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import Header from '../../../components/Room/CreateLog/Header';
import TagSection from '../../../components/Room/CreateLog/TagSection';
import useCreateBelog from '../../../hooks/Room/useCreateBelog';

const CreateLog = () => {
  const navigate = useNavigate();
  const { create } = useCreateBelog();

  return (
    <>
      <S.RoomHeader className="flex">
        <div className="mr-auto w-[30px]" />
        <h4>별록 작성하기</h4>
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
        <TagSection create={create} />
      </S.RoomWrapper>
    </>
  );
};

export default CreateLog;
