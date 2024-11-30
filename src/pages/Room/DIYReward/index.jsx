import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import * as S from '../../../styles/Room/room.style';
import {
  REWARD_BLUE,
  REWARD_YELLOW,
  REWARD_RED,
  REWARD_PURPLE,
} from '../../../constants/Common/imgs';
import { LEFT_ICON, RIGHT_ICON } from '../../../constants/Common/icon';
import StickerSection from '../../../components/Room/DIYReward/StickerSection';
import RewardImg from '../../../components/Room/DIYReward/RewardImg';

const DIYReward = () => {
  const imgList = [REWARD_BLUE, REWARD_YELLOW, REWARD_RED, REWARD_PURPLE];
  const [curImg, setCurImg] = useState(0);
  const [selectSticker1, setSelectSticker1] = useState(null);
  const [selectSticker2, setSelectSticker2] = useState(null);
  const [selectSticker3, setSelectSticker3] = useState(null);
  const [selectCharacter, setSelectCharacter] = useState(null);
  const [selectStamp, setSelectStamp] = useState(null);
  const [selectHat, setSelectHat] = useState(null);
  const [selectBubble, setSelectBubble] = useState(null);

  const [name, setName] = useState('별별');

  const rewardRef = useRef();

  const setSelectProps = {
    setSelectSticker1,
    setSelectSticker2,
    setSelectSticker3,
    setSelectCharacter,
    setSelectStamp,
    setSelectHat,
    setSelectBubble,
  };

  const selectProps = {
    selectSticker1,
    selectSticker2,
    selectSticker3,
    selectCharacter,
    selectStamp,
    selectHat,
    selectBubble,
  };

  useEffect(() => {
    console.log('changed select sticker1', selectCharacter);
  }, [selectCharacter]);

  const navigate = useNavigate();
  return (
    <>
      <S.RoomHeader className="flex">
        <div className="mr-auto w-[30px]" />
        <h4>상장 꾸미기</h4>
        <button
          className="ml-auto pr-[10px]"
          type="button"
          onClick={() => navigate('../rewards')}
        >
          <img
            src={CLOSE_BUTTON_ICON}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.DIYWrapper styles={{ bg: '#F2F2F2' }}>
        <input
          className="placeholder:text-[#ADADAD]-500 w-full h-[44px] p-[20px] rounded-[50px] bg-[#ffffff]"
          type="text"
          name="tag"
          maxLength={6}
          placeholder="상 이름을 정해주세요(6자이내)"
          onChange={(e) => {
            if (e?.target?.value) setName(e.target.value);
            else setName('별별');
          }}
        />
        <div className="flex w-full h-fit justify-between items-center">
          <button
            onClick={() => setCurImg((prev) => (prev + 4 - 1) % 4)}
            type="button"
            className="h-[30px] w-[30px]"
          >
            <img src={LEFT_ICON} alt="left" className="w-[15px] h-[15px]" />
          </button>
          <div className="w-[190px] h-[230px]">
            <RewardImg
              name={name}
              imgList={imgList}
              curImg={curImg}
              rewardRef={rewardRef}
              {...selectProps}
            />
          </div>
          <button
            onClick={() => setCurImg((prev) => (prev + 1) % 4)}
            type="button"
            className="h-[30px] w-[30px]"
          >
            <img src={RIGHT_ICON} alt="right" className="w-[15px] h-[15px]" />
          </button>
        </div>
      </S.DIYWrapper>
      <StickerSection rewardRef={rewardRef} {...setSelectProps} />
    </>
  );
};

export default DIYReward;
