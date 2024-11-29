import React, { useState } from 'react';
import { Tag } from '../../../../styles/Room/logHistory.style';

const FilterHeader = () => {
  const [selectTag, setSelectTag] = useState('최신순');
  const clickCustomTag = ({ name }) => {
    setSelectTag(name);
  };

  const filterList = ['최신순', '오래된 순', '도장 많이 받은 순'];
  return (
    <div className="flex min-h-[30px] overflow-x-auto gap-[6px]">
      {filterList.map((filter, index) => (
        <Tag
          type="button"
          isSelected={selectTag === filter}
          onClick={() => clickCustomTag({ name: filter })}
          key={index}
        >
          <p>{filter}</p>
        </Tag>
      ))}
    </div>
  );
};

export default FilterHeader;
