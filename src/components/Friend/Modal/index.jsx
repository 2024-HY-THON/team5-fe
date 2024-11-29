import React from 'react';
import * as S from '../../../styles/Friend/Modal.style';

const Modal = ({ isOpen = true, setClose, children, width }) => {
  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    if (setClose) {
      setClose(false);
    }
  };

  const handleWrapperClick = (e) => {
    // 모달 외부를 클릭했을 때만 closeModal 호출
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <S.ModalWRapper className="modal" onClick={(e) => handleWrapperClick(e)}>
      <S.ModalContent className="modal-content" style={{ width: `${width}px` }}>
        {children}
      </S.ModalContent>
    </S.ModalWRapper>
  );
};

export default Modal;
