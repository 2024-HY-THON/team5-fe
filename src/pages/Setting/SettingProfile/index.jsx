import React from 'react';
import { useState } from 'react';
// styled-components
import * as S from '../../../styles/Setting/settingProfile.style';
// components
import Header from '../../../components/Friend/FriendHeader';
// assets
import { CHECKBOX_ICON, CHANGE_ICON } from '../../../constants/Setting/icon';

const SettingProfile = () => {
  const [isChangeImage, setIsChangeImage] = useState(false);
  return (
    <S.SettingProfileWrapper>
      <S.HeaderWrapper>
        <Header header="프로필 수정" />
      </S.HeaderWrapper>
      {!isChangeImage ? (
        <S.InnerWrapper>
          <S.GrayCircle
            width={112}
            height={112}
            onClick={() => setIsChangeImage(true)}
          >
            <S.ChangeIcon src={CHANGE_ICON} alt="change" />
          </S.GrayCircle>
          <S.DefaultText>닉네임 변경</S.DefaultText>
          <S.NickNameInput placeholder="2-8자 이내 한글 또는 영문" />
          <S.BottomWrapper>
            <S.Secession>계정 탈퇴하기</S.Secession>
            <S.Button>변경사항 저장</S.Button>
          </S.BottomWrapper>
        </S.InnerWrapper>
      ) : (
        <S.InnerWrapper>
          <S.Question>어떤 프로필로 변경할까요?</S.Question>
          <S.GridWrapper>
            <div>
              <S.CheckBox>
                <img
                  src={CHECKBOX_ICON}
                  alt="checkbox"
                  style={{ width: '24px', height: '24px' }}
                />
              </S.CheckBox>
              <S.Blur />
            </div>
            <div>
              <S.CheckBox></S.CheckBox>
            </div>
            <div>
              <S.CheckBox></S.CheckBox>
            </div>
            <div>
              <S.CheckBox></S.CheckBox>
            </div>
          </S.GridWrapper>
          <S.BottomWrapper>
            <S.Button>선택완료</S.Button>
          </S.BottomWrapper>
        </S.InnerWrapper>
      )}
    </S.SettingProfileWrapper>
  );
};

export default SettingProfile;
