import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CLOSE_BUTTON_ICON } from '../../../constants/Common/icon';
import * as S from '../../../styles/Room/room.style';

const ResultReward = () => {
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState(null);
  const image = location.state?.image;

  useEffect(() => {
    if (image) {
      const imgBlob = dataURLToBlob(image);
      const imgUrl = URL.createObjectURL(imgBlob);
      setImageUrl(imgUrl);
    }
  }, [image]);

  // dataURL을 Blob으로 변환하는 함수
  const dataURLToBlob = (dataURL) => {
    const [header, base64Data] = dataURL.split(',');
    const mime = header.match(/:(.*?);/)[1];
    const binary = atob(base64Data);
    const length = binary.length;
    const buffer = new ArrayBuffer(length);
    const view = new Uint8Array(buffer);

    for (let i = 0; i < length; i++) {
      view[i] = binary.charCodeAt(i);
    }

    return new Blob([buffer], { type: mime });
  };

  // const navigate = useNavigate();

  // const handleDownload = async () => {
  //   if (rewardRef.current) {
  //     const canvas = await html2canvas(rewardRef.current);
  //     const dataURL = canvas.toDataURL('image/png');

  //     const link = document.createElement('a');
  //     link.href = dataURL;
  //     link.download = 'reward_image.png';
  //     link.click();
  //   }
  // };

  return (
    <>
      <S.RoomHeader className="flex">
        <div className="mr-auto w-[30px]" />
        <h4>상장 출력하기</h4>
        <button
          className="ml-auto pr-[10px]"
          type="button"
          // onClick={() => navigate('../rewards')}
        >
          <img
            src={CLOSE_BUTTON_ICON}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </S.RoomHeader>
      <S.RoomWrapper styles={{ bg: '#F2F2F2' }}>
        <div className="flex flex-col gap-[10px] items-center justify-center pt-[50px] ">
          <h1 className="text-xl font-bold mb-4">상장 제작이 완료되었어요</h1>
          <img
            src={imageUrl}
            alt="generated_reward"
            style={{ width: '190px', height: '230px' }}
          />
          <div className="flex gap-[15px] pt-[40px] w-full justify-center items-center">
            <div className="w-[116px] h-[48px] rounded-[40px] bg-[#525252]">
              <a
                href={imageUrl}
                download="reward_image.png"
                className="w-[116px] h-[48px] rounded-[40px] text-white flex items-center justify-center"
              >
                <p>저장하기</p>
              </a>
            </div>
            <button
              type="button"
              className="w-[116px] h-[48px] rounded-[40px] bg-[#ffffff]"
            >
              <p>공유하기</p>
            </button>
          </div>
        </div>
      </S.RoomWrapper>
    </>
  );
};

export default ResultReward;
