import React from 'react';
import * as S from '../../../styles/Room/room.style';
import MyLog from '../../../components/Room/RoomMain/MyLog';
import DailyBanner from '../../../components/Room/RoomMain/DailyBanner';
import RewardWallSection from '../../../components/Room/RoomMain/RewardWallSection';
import WriteButton from '../../../components/Room/RoomMain/WirteButton';

const RoomMain = () => {
  return (
    <>
      <S.RoomHeader>
        <h4>닉네임의 별룸</h4>
      </S.RoomHeader>
      <S.RoomWrapper styles={{ isMain: true }}>
        <RewardWallSection />
        <MyLog />
        <DailyBanner />
        <WriteButton />
      </S.RoomWrapper>
    </>
  );
};

export default RoomMain;
