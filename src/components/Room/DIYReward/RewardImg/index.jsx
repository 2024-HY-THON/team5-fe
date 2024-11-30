import React from 'react';

const RewardImg = ({ name, imgList, curImg, rewardRef, ...props }) => {
  const {
    selectSticker1,
    selectSticker2,
    selectSticker3,
    selectCharacter,
    selectStamp,
    selectHat,
    selectBubble,
  } = props;

  return (
    <div
      id="rewardImgArea"
      ref={rewardRef}
      className="w-full h-full relative overflow-hidden"
    >
      <img
        src={imgList[curImg]}
        alt="reward_blue"
        className="w-full h-full absolute"
      />
      <p
        style={{
          fontSize: `${Math.max(12, 20 - (name.length - 2) * 2)}px`, // 최소 12px, 최대 20px
          lineHeight: '40px',
        }}
        className="w-[100px] h-[40px] absolute top-[30px] left-[35px] text-center align-text-bottom"
      >
        {name}
      </p>
      <textarea
        className="placeholder:text-[#ADADAD] text-center text-[12px] text-wrap w-[110px] h-fit absolute bottom-[60px] bg-transparent left-[40px]"
        name="tag"
        maxLength={10}
        placeholder="입력해주세요."
      />
      <div className="w-[40px] h-[40px] absolute top-[65px] left-[35px] rotate-[-22.5deg]">
        {selectSticker1 && <img src={selectSticker1} alt="sticker1" />}
      </div>
      <div className="w-[40px] h-[40px] absolute top-[90px] left-[45px] rotate-[22.5deg]">
        {selectSticker2 && <img src={selectSticker2} alt="sticker2" />}
      </div>
      <div className="w-[40px] h-[40px] absolute  top-[67px] right-[35px]">
        {selectSticker3 && <img src={selectSticker3} alt="sticker3" />}
      </div>
      <div className="w-[45px] h-[45px] absolute  top-[75px] left-[75px]">
        {selectCharacter && <img src={selectCharacter} alt="character" />}
      </div>
      <div className="w-[45px] h-[45px] absolute  bottom-[30px] right-[40px] opacity-75">
        {selectStamp && <img src={selectStamp} alt="stamp" />}
      </div>
      <div className="w-[40px] h-[40px] absolute top-[60px] right-[60px]">
        {selectHat && <img src={selectHat} alt="hat" />}
      </div>
      <div className="w-[40px] h-[40px] absolute top-[89px] right-[40px]">
        {selectBubble && <img src={selectBubble} alt="bubble" />}
      </div>
    </div>
  );
};

export default RewardImg;
