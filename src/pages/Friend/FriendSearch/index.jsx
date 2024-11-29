import React, { useState } from 'react';
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

const FriendSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <S.FriendSearchWrapper>
      <Header header={'친구 추가'} />
      <S.FriendSearchText>검색할 닉네임을 입력하세요</S.FriendSearchText>
      <S.FriendSearchInput type="text" placeholder="닉네임 #숫자코드" />
      <S.FriendLists>
        <S.FriendList>
          <S.FriendListProfile onClick={() => navigate('/friend/detail/0')}>
            <img src={BLUECHARACTER_ICON} alt="" />
          </S.FriendListProfile>
          <S.FriendListNickname>닉네임</S.FriendListNickname>
          <S.FriendButton
            src={TO_ICON}
            alt="to-friend"
            onClick={() => setIsModalOpen(true)}
          />
        </S.FriendList>
      </S.FriendLists>
      <BottomButton text={'완료'} color={'#FFC655'} />
      <Modal width={345} isOpen={isModalOpen}>
        <S.ModalInner>
          <S.ModalUser>
            <S.ModalProfile></S.ModalProfile>
            <S.ModalTexts>
              <S.ModalNickname>닉네임</S.ModalNickname>
              <S.ModalQuestion>님께 친구요청을 보낼까요?</S.ModalQuestion>
            </S.ModalTexts>
          </S.ModalUser>
          <S.ModalButtons>
            <S.ModalButton color={'#FFC655'}>요청 보내기</S.ModalButton>
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
