import React, { useState } from 'react';
// styled-components
import * as S from '../../styles/Community/community.style';
// components
import Header from '../../components/Community/CommunityHeader';
import RealTime from '../../components/Community/RealTime';
import FriendFeed from '../../components/Community/FriendFeed';

const Community = () => {
  const [selected, setSelected] = useState('realTime');
  return (
    <S.CommunityContainer>
      <Header header={'피드'} />
      <S.CommunityContents>
        <S.CommunityCategoryBox>
          <S.CommunityCategory
            selected={selected === 'realTime'}
            onClick={() => setSelected('realTime')}
          >
            실시간 별록
          </S.CommunityCategory>
          <S.CommunityCategory
            selected={selected === 'friendFeed'}
            onClick={() => setSelected('friendFeed')}
          >
            친구 별록
          </S.CommunityCategory>
        </S.CommunityCategoryBox>
      </S.CommunityContents>
      {selected === 'realTime' ? <RealTime /> : <FriendFeed />}
    </S.CommunityContainer>
  );
};

export default Community;
