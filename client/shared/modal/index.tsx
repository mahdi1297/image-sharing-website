import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./style.module.scss";

const Modal = ({ show, onClose, children, title, setShow, size }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, [show]);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      <div className={style.modal_wrapper}>
        <div
          className={style.modal}
          style={size ? { width: size } : { width: "500px" }}
        >
          <div className={style.modal_header}>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className={style.modal_body}>{children}</div>
        </div>
      </div>
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
