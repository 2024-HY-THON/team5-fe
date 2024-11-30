import React from 'react';
import { useState } from 'react';
// styled-components
import * as S from '../../../styles/Setting/settingProfile.style';
// components
import Header from '../../../components/Setting/SettingHeader';
// assets
import { CHECKBOX_ICON, CHANGE_ICON } from '../../../constants/Setting/icon';
import {
  STAR_BLUE,
  STAR_PURPLE,
  STAR_RED,
  STAR_YELLOW,
} from '../../../constants/Common/icon';
import { useNavigate } from 'react-router-dom';

const Character = [STAR_YELLOW, STAR_BLUE, STAR_RED, STAR_PURPLE];

const SettingProfile = () => {
  const [isChangeImage, setIsChangeImage] = useState(false);
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  return (
    <S.SettingProfileWrapper>
      <S.HeaderWrapper>
        <Header
          header="프로필 수정"
          onClickFunc={isChangeImage === true ? setIsChangeImage : undefined}
        />
      </S.HeaderWrapper>
      {!isChangeImage ? (
        <S.InnerWrapper>
          <S.GrayCircle
            width={112}
            height={112}
            onClick={() => setIsChangeImage(true)}
          >
            <img src={Character[index]} alt="" />
            <S.ChangeIcon src={CHANGE_ICON} alt="change" />
          </S.GrayCircle>
          <S.DefaultText>닉네임 변경</S.DefaultText>
          <S.NickNameInput placeholder="2-8자 이내 한글 또는 영문" />
          <S.BottomWrapper onClick={() => setIndex(-1)}>
            <S.Secession>계정 탈퇴하기</S.Secession>
            <S.Button onClick={() => navigate(-1)}>변경사항 저장</S.Button>
          </S.BottomWrapper>
        </S.InnerWrapper>
      ) : (
        <S.InnerWrapper>
          <S.Question>어떤 프로필로 변경할까요?</S.Question>
          <S.GridWrapper>
            <S.Div onClick={() => setIndex(0)}>
              <img src={Character[0]} alt="" />
              {index === 0 && (
                <S.CheckBox>
                  <img
                    src={CHECKBOX_ICON}
                    alt="checkbox"
                    style={{ width: '24px', height: '24px' }}
                  />
                </S.CheckBox>
              )}
              {index === 0 && <S.Blur />}
            </S.Div>
            <S.Div onClick={() => setIndex(1)}>
              <img src={Character[1]} alt="" />
              {index === 1 && (
                <S.CheckBox>
                  <img
                    src={CHECKBOX_ICON}
                    alt="checkbox"
                    style={{ width: '24px', height: '24px' }}
                  />
                </S.CheckBox>
              )}
              {index === 1 && <S.Blur />}
            </S.Div>
            <S.Div onClick={() => setIndex(2)}>
              <img src={Character[2]} alt="" />
              {index === 2 && (
                <S.CheckBox>
                  <img
                    src={CHECKBOX_ICON}
                    alt="checkbox"
                    style={{ width: '24px', height: '24px' }}
                  />
                </S.CheckBox>
              )}
              {index === 2 && <S.Blur />}
            </S.Div>
            <S.Div onClick={() => setIndex(3)}>
              <img src={Character[3]} alt="" />
              {index === 3 && (
                <S.CheckBox>
                  <img
                    src={CHECKBOX_ICON}
                    alt="checkbox"
                    style={{ width: '24px', height: '24px' }}
                  />
                </S.CheckBox>
              )}
              {index === 3 && <S.Blur />}
            </S.Div>
          </S.GridWrapper>
          <S.BottomWrapper>
            <S.Button onClick={() => navigate(-1)}>선택완료</S.Button>
          </S.BottomWrapper>
        </S.InnerWrapper>
      )}
    </S.SettingProfileWrapper>
  );
};

export default SettingProfile;
