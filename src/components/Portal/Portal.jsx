import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  &.block {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &.block-show {
    opacity: 1;
  }
`;

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
