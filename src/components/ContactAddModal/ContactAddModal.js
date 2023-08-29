import { ContactForm } from "components/ContactForm/ContactForm";
import { useCallback, useEffect, useRef } from "react";

import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(161, 21, 207, 0.5);
  width: 100vw;
  height: 100vw;
  z-index: 2;
`;

const ModalWindow = styled.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

export const AddContactModal = ({ onClose }) => {
  return (
    <ModalWindow className="modal">
      <ContactForm onSubmitClose={onClose} />
    </ModalWindow>
  );
};
