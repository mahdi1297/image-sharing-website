import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledModalOverlay,
} from "./style";

const Modal = ({ show, onClose, children, title, setShow }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);

    if (show === true && typeof window !== "undefined") {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "hidden";
      }
    }
  }, [show]);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      <StyledModalOverlay>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          {title && <h1>{title}</h1>}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalOverlay>
    </>
  ) : null;

  if (typeof window !== "undefined") {
    let container: any = document.getElementById("modal-container");
    return ReactDOM.createPortal(modalContent, container);
  } else {
    return null;
  }
};

export default Modal;
