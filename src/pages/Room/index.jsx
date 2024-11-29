import React from 'react';
import * as S from '../../styles/Room/room.style';
import RankSection from '../../components/Room/RankSection';
import DailyBanner from '../../components/Room/DailyBanner';
import MyReward from '../../components/Room/MyReward';
import WriteButton from '../../components/Room/WirteButton';

const Room = () => {
  return (
    <>
      <S.RoomHeader>
        <h4>닉네임의 별룸</h4>
      </S.RoomHeader>
      <S.RoomWrapper>
        <MyReward />
        <RankSection />
        <DailyBanner />
        <WriteButton />
      </S.RoomWrapper>
    </>
  );
};

export default Room;
