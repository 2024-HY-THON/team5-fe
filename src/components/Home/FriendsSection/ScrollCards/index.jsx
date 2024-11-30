import React from 'react';
const ScrollCards = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="overflow-x-auto">
      <div className="flex w-fit gap-x-[10px] overflow-x-auto">
        {/** dummy data */}
        {dummyData?.map((index, idx) => (
          <div key={idx} className="w-[103px] h-[142px]">
            <img
              src={`../../../assets/example/example${index}.png`}
              alt={idx}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollCards;
