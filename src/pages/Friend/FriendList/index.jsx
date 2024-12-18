import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friend.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import {
  REMOVE_ICON,
  RIGHT_ICON,
  ADD_ICON,
} from '../../../constants/Friend/icon';
import { BLUECHARACTER_ICON } from '../../../constants/Community/icon';

import { getFriends } from '../../../services/Friend/user';

const FriendList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    { name: '철수', id: 5 },
    { name: '영희', id: 6 },
    { name: '훈이', id: 7 },
  ]);

  useEffect(() => {
    if (process.env.PUBLIC_URL === 'production') {
      getFriends().then((res) => {
        setData(res);
      });
    }
  }, []);

  const removeIndex = (idx) => {
    setData(data.filter((_, index) => index !== idx));
  };
  return (
    <S.FriendWrapper>
      <Header header="친구 목록" />
      <S.RequestButton onClick={() => navigate('request')}>
        <span>친구 요청</span>
        <img src={RIGHT_ICON} alt="right" />
      </S.RequestButton>
      <S.FriendLists>
        {data.map((name, idx) => (
          <S.FriendList key={idx}>
            <S.FriendListProfile onClick={() => navigate(`detail/${name.id}`)}>
              <img src={BLUECHARACTER_ICON} alt="" />
            </S.FriendListProfile>
            <S.FriendListNickname>{`${name.name} #000${name.id}`}</S.FriendListNickname>
            <S.FriendButton
              src={REMOVE_ICON}
              alt="remove-friend"
              onClick={() => removeIndex(idx)}
            />
          </S.FriendList>
        ))}
      </S.FriendLists>
      <S.FixedButton onClick={() => navigate('search')}>
        <img src={ADD_ICON} alt="remove-friend" />
      </S.FixedButton>
    </S.FriendWrapper>
  );
};

export default FriendList;
