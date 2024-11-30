import React, { useEffect, useState } from 'react';
// styled-components
import * as S from '../../../styles/Friend/friendSearch.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import { TO_ICON } from '../../../constants/Friend/icon';
import BottomButton from '../../../components/Friend/BottomButton';
import Modal from '../../../components/Friend/Modal';
import { useNavigate } from 'react-router-dom';
import { BLUECHARACTER_ICON } from '../../../constants/Community/icon';

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

const FriendSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (search === '') {
      setData([]);
      return;
    } else {
      setData(Dummy.filter((name) => name.name.includes(search)));
    }
  }, [search]);

  const handleOnclik = (idx) => {
    setIsModalOpen(true);
    setIndex(idx);
    if (index) return;
  };

  return (
    <S.FriendSearchWrapper>
      <Header header={'친구 추가'} />
      <S.FriendSearchText>검색할 닉네임을 입력하세요</S.FriendSearchText>
      <S.FriendSearchInput
        type="text"
        placeholder="닉네임 #숫자코드"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.FriendLists>
        {data.map((dat, idx) => (
          <S.FriendList key={idx}>
            <S.FriendListProfile
              onClick={() => navigate(`/friend/detail/${dat.id}`)}
            >
              <img src={BLUECHARACTER_ICON} alt="" />
            </S.FriendListProfile>
            <S.FriendListNickname>{dat.name}</S.FriendListNickname>
            <S.FriendButton
              src={TO_ICON}
              alt="to-friend"
              onClick={() => handleOnclik(idx)}
            />
          </S.FriendList>
        ))}
      </S.FriendLists>
      <BottomButton text={'완료'} color={'#FFC655'} />
      <Modal width={345} isOpen={isModalOpen}>
        <S.ModalInner>
          <S.ModalUser>
            <S.ModalProfile>
              <img src={BLUECHARACTER_ICON} alt="" />
            </S.ModalProfile>
            <S.ModalTexts>
              <S.ModalNickname>{Dummy[index].name}</S.ModalNickname>
              <S.ModalQuestion>님께 친구요청을 보낼까요?</S.ModalQuestion>
            </S.ModalTexts>
          </S.ModalUser>
          <S.ModalButtons>
            <S.ModalButton
              color={'#FFC655'}
              onClick={() => setIsModalOpen(false)}
            >
              요청 보내기
            </S.ModalButton>
            <S.ModalButton
              color={'#E0E0E0'}
              onClick={() => setIsModalOpen(false)}
            >
              나가기
            </S.ModalButton>
          </S.ModalButtons>
        </S.ModalInner>
      </Modal>
    </S.FriendSearchWrapper>
  );
};

export default FriendSearch;
