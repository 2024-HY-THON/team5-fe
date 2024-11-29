import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TAG_LIST } from '../../../../constants/Room/tags';
import { Tag } from '../../../../styles/Room/logUpdate.style';

const TagSection = () => {
  const [selectTag, setSelectTag] = useState(null);

  const clickCustomTag = ({ name }) => {
    setSelectTag(name);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('../detail');
  };

  return (
    <form className="w-full flex flex-col gap-[20px]" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[10px]">
        <h3 className="pl-[10px]">태그 선택</h3>
        <div className="flex flex-wrap gap-[10px]">
          {TAG_LIST.map((tag, index) => (
            <Tag
              type="button"
              isSelected={selectTag === tag}
              onClick={() => clickCustomTag({ name: tag })}
              key={index}
            >
              <p>#{tag}</p>
            </Tag>
          ))}
          <Tag
            type="button"
            isSelected={selectTag === 'personal'}
            onClick={() => clickCustomTag({ name: 'personal' })}
          >
            <p>직접작성</p>
          </Tag>
          {selectTag === 'personal' && (
            <input
              className="placeholder:text-[#ADADAD]-500 w-full h-[44px] p-[20px] rounded-[50px] bg-[#f2f2f2]"
              type="text"
              name="tag"
              placeholder="입력해주세요."
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[10px] w-full">
        <h3 className="pl-[10px]">내용</h3>
        <textarea
          className="w-full h-[110px] p-[20px] rounded-[20px] bg-[#f2f2f2] placeholder:text-[#ADADAD] text-left"
          name="content"
          placeholder="내용을 입력해주세요(200자 이내)"
          maxLength={200}
        />
      </div>
      <button
        type="submit"
        className="w-full h-[60px] rounded-[50px] bg-[#ffc655] flex items-center justify-center text-white"
      >
        <p>수정 완료하기</p>
      </button>
    </form>
  );
};

export default TagSection;
