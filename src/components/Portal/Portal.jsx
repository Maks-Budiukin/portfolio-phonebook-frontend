import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./Portal.styled";

export const Portal = ({ children, onClose }) => {
  const rootModal = document.querySelector("#modalPortal");
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop
      className={`block ${isShowBox ? " block-show" : ""}`}
      onClick={handleClose}
    >
      {children}
    </Backdrop>,
    rootModal
  );
};
