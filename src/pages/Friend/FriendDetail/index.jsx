import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// styled-components
import * as S from '../../../styles/Friend/friendDetail.style';
// assets
import { EXIT_ICON, MEDAL_ICON } from '../../../constants/Friend/icon';
import { BLUECHARACTER_ICON } from '../../../constants/Community/icon';

import { getFriendRequests } from '../../../services/Friend/user';

const Dummy = [
  { name: '미희', id: 0 },
  { name: '영미', id: 1 },
  { name: '준수', id: 2 },
  { name: '경수', id: 3 },
  { name: '지미', id: 4 },
  { name: '철수', id: 5 },
  { name: '영희', id: 6 },
  { name: '훈이', id: 7 },
];

const FriendDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(() => {
    if (process.env.PUBLIC_URL === 'production') {
      getFriendRequests().then((res) => {
        setData(res);
        console.log(data);
      });
    }
  });
  return (
    <S.FriendDetailWrapper>
      <S.FreindDetailExitButton
        src={EXIT_ICON}
        alt=""
        onClick={() => navigate(-1)}
      />
      <S.FriendDetailText>
        {`${Dummy[params.id].name} #000${params.id}`}
        <br />
        님의 프로필
      </S.FriendDetailText>
      <S.FriendDetailGrayCircle width={172} height={172}>
        <img
          src={BLUECHARACTER_ICON}
          alt=""
          style={{ width: '160px', height: '160px' }}
        />
      </S.FriendDetailGrayCircle>
      <S.FriendDetailGrade>
        <S.FriendDetailGrayCircle width={56} height={56}>
          <img
            src={MEDAL_ICON}
            alt="medal"
            style={{ width: '40px', height: '40px' }}
          />
        </S.FriendDetailGrayCircle>
        <S.FriendDetailGradeCount>10</S.FriendDetailGradeCount>
      </S.FriendDetailGrade>
    </S.FriendDetailWrapper>
  );
};

export default FriendDetail;
