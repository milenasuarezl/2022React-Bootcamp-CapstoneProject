import { ModalOverlay, ModalWrapper, ModalBox, ModalHeader, ModalCloseButton} 
from './Modal.styled';

const Modal = ({ isShowing, hide, title, children }) =>
  isShowing
    ? <>
        <ModalOverlay>
            <ModalWrapper>
                <ModalBox>
                    <ModalHeader>
                        <h4>{title}</h4>
                        <ModalCloseButton onClick={hide}>
                            <span>&times;</span>
                        </ModalCloseButton>
                    </ModalHeader>
                    <div>{children}</div>
                </ModalBox>
            </ModalWrapper>
        </ModalOverlay>

    </>
    : null;

export default Modal;