import React from 'react';
import * as S from '../../../styles/Room/room.style';
import FilterHeader from '../../../components/Room/LogHistory/FilterHeader';
// import DateHistory from '../../../components/Room/MyRewards/DateHistory';
import SpecialRewards from '../../../components/Room/MyRewards/SpecialRewards';

const MyRewards = () => {
  // const dummyData = [
  //   {
  //     date: '2024.11.28',
  //     log: [{ tag: '산책', content: '산책했어요. 오랜만에.' }],
  //   },
  //   {
  //     date: '2024.11.26',
  //     log: [
  //       { tag: '밥', content: '김치등갈비찜 먹었어요.' },
  //       { tag: '잠', content: '12시간 잤어요.' },
  //     ],
  //   },
  // ];

  return (
    <>
      <S.RoomHeader>
        <h4>내 상장</h4>
      </S.RoomHeader>
      <S.RoomWrapper styles={{ bg: '#F2F2F2' }}>
        <FilterHeader />
        <SpecialRewards />
        {/* {dummyData.map((data, index) => (
          <DateHistory key={index} data={data} />
        ))} */}
      </S.RoomWrapper>
    </>
  );
};

export default MyRewards;