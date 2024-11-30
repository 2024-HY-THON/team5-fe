import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom';
import { NONE_ICON } from '../../../../constants/Common/icon';

import { TagGrey } from '../../../../styles/Room/logHistory.style';
import {
  STIKCER_NORMAL_SET,
  STIKCER_STAMP_SET,
  STICKER_CHARACTER_SET,
  STICKER_HAT_SET,
  STICKER_BUBBLE_SET,
} from '../../../../constants/Room/stickers';

const StickerSection = ({ rewardRef, ...props }) => {
  const {
    setSelectSticker1,
    setSelectSticker2,
    setSelectSticker3,
    setSelectCharacter,
    setSelectStamp,
    setSelectHat,
    setSelectBubble,
  } = props;

  const filterList = [
    '스티커1',
    '스티커2',
    '스티커3',
    '스탬프',
    '캐릭터',
    '모자',
    '말풍선',
  ];
  const selectMap = {
    스티커1: setSelectSticker1,
    스티커2: setSelectSticker2,
    스티커3: setSelectSticker3,
    스탬프: setSelectStamp,
    캐릭터: setSelectCharacter,
    모자: setSelectHat,
    말풍선: setSelectBubble,
  };

  const filterMap = {
    스티커1: STIKCER_NORMAL_SET,
    스티커2: STIKCER_NORMAL_SET,
    스티커3: STIKCER_NORMAL_SET,
    스탬프: STIKCER_STAMP_SET,
    캐릭터: STICKER_CHARACTER_SET,
    모자: STICKER_HAT_SET,
    말풍선: STICKER_BUBBLE_SET,
  };

  const [selectTag, setSelectTag] = useState('스티커1');
  const clickCustomTag = ({ name }) => {
    setSelectTag(name);
  };

  const navigate = useNavigate();
  const handleGenerateAndNavigate = async () => {
    if (rewardRef.current) {
      const canvas = await html2canvas(rewardRef.current);
      const dataURL = canvas.toDataURL('image/png');

      navigate('/room/diyReward/result', { state: { image: dataURL } });
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col justify-between px-[20px] py-[15px] mt-auto">
      <div className="flex mb-auto min-h-[30px] h-[30px] overflow-x-auto gap-[6px]">
        {filterList.map((filter, index) => (
          <TagGrey
            type="button"
            isSelected={selectTag === filter}
            onClick={() => clickCustomTag({ name: filter })}
            key={index}
          >
            <p>{filter}</p>
          </TagGrey>
        ))}
      </div>
      <div className="flex grow min-h-0 min-w-[315px] py-[10px] overflow-y-auto flex-wrap">
        <button
          onClick={() => {
            selectMap?.[selectTag]?.(null);
          }}
          className="w-[105px] h-[105px] rounded-[20px] bg-[#F2F2F2] flex items-center justify-center"
        >
          <img src={NONE_ICON} alt="none" className="h-[33px] w-[33px]" />
        </button>
        {filterMap[selectTag]?.map((sticker, index) => (
          <button
            key={index}
            onClick={() => {
              selectMap?.[selectTag]?.(sticker);
            }}
            className="w-[105px] h-[105px]"
          >
            <img src={sticker} alt="sticker" />
          </button>
        ))}
      </div>
      <button
        type="submit"
        onClick={handleGenerateAndNavigate}
        className="w-full h-[60px] mt-auto rounded-[50px] bg-[#1f1f1f] flex items-center justify-center text-white"
      >
        <p>꾸미기 완료</p>
      </button>
    </div>
  );
};

export default StickerSection;
