import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { TAG_LIST } from '../../../../constants/Room/tags';
import { Tag } from '../../../../styles/Room/logUpdate.style';
import axios from 'axios';

const TagSection = ({ create }) => {
  const [selectTag, setSelectTag] = useState(null);
  const [personalTag, setPersonalTag] = useState('');
  const [content, setContent] = useState('');

  const clickCustomTag = ({ name }) => {
    setSelectTag(name);
  };

  // const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const submitData = {
  //     tags: selectTag === 'personal' ? personalTag : selectTag,
  //     content,
  //   };
  //
  //   console.log('submitData???', submitData);
  //   create({ body: submitData });
  //   // navigate('../detail');
  // };

  const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 API URL
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true, // 쿠키 포함
  });


  const postReward = async ({body}) => {
    try {
      const response = await apiClient.post('/award/saved', body); // 백엔드 API 호출
      console.log('award saved, token:', response?.data); // 응답 데이터 확인
      return response.data; // 데이터 반환
    } catch (error) {
      console.error('Error during social login API call:', error); // 에러 로그
      throw error;
    }
  };

  const binaryData = new Uint8Array([
    0x52, 0x49, 0x46, 0x46, 0xe8, 0x1e, 0x00, 0x00, 0x57, 0x45, 0x42, 0x50, // ... (바이너리 데이터)
  ]);

  const blob = new Blob([binaryData], { type: 'image/jpeg' });

  const formData = new FormData();
  formData.append('awardImage', blob, 'CAT.jpg');
  formData.append('title', 'test');
  formData.append('email', 'test@test.com');

  const handleSubmit = async (event) => {
      try {
        const token = await postReward({body: formData});
        console.log('Access token received:', token); // 토큰 확인
        return token;
      } catch (error) {
        console.error('Error during token fetch:', error); // 에러 로그
      }
  };


  return (
    <form className="w-full flex flex-col gap-[20px]" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[10px]">
        <h3 className="pl-[10px]">태그 선택</h3>
        <div className="flex flex-wrap gap-[10px]">
          {TAG_LIST.map((tag, index) => (
            <Tag
              type="button"
              isSelected={selectTag === tag}
              onClick={() => clickCustomTag({ name: tag })}
              key={index}
            >
              <p>#{tag}</p>
            </Tag>
          ))}
          <Tag
            type="button"
            isSelected={selectTag === 'personal'}
            onClick={() => clickCustomTag({ name: 'personal' })}
          >
            <p>직접작성</p>
          </Tag>
          {selectTag === 'personal' && (
            <input
              className="placeholder:text-[#ADADAD]-500 w-full h-[44px] p-[20px] rounded-[50px] bg-[#f2f2f2]"
              type="text"
              name="tag"
              placeholder="입력해주세요."
              onChange={(e) => setPersonalTag(e.target.value)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[10px] w-full">
        <h3 className="pl-[10px]">내용</h3>
        <textarea
          className="w-full h-[110px] p-[20px] rounded-[20px] bg-[#f2f2f2] placeholder:text-[#ADADAD] text-left"
          name="content"
          placeholder="내용을 입력해주세요(200자 이내)"
          maxLength={200}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="w-full h-[60px] rounded-[50px] bg-[#ffc655] flex items-center justify-center text-white"
        onClick={handleSubmit}
      >
        <p>상장 만들러가기</p>
      </button>
    </form>
  );
};

export default TagSection;
