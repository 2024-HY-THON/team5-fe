import React from 'react';
import * as S from '../../../styles/Friend/Modal.style';

const Modal = ({ isOpen = true, children, width }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.ModalWRapper className="modal">
      <S.ModalContent className="modal-content" style={{ width: `${width}px` }}>
        {children}
      </S.ModalContent>
    </S.ModalWRapper>
  );
};

export default Modal;
