import { ContactForm } from "components/ContactForm/ContactForm";
import { useEffect, useState } from "react";

import styled from "styled-components";

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  background-color: #fff;

  padding: 68px 48px;
  margin: 32px;

  /* clip-path: polygon(0 8%, 100% 0, 96% 100%, 10% 100%); */
  /* clip-path: polygon(0 8%, 100% 0, 95% 100%, 6% 100%); */

  &.block {
    transform: translate(-70%, -60%) scale(0.95);
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    transform: translate(-70%, -60%) scale(1);
  }
`;

export const ContactModal = (props) => {
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  return (
    <ModalWindow className={`modal block ${isShowBox ? " block-show" : ""}`}>
      <ContactForm
        onSubmitClose={props.onClose}
        fn={props.fn}
        _id={props._id}
        label={props.label}
      />
    </ModalWindow>
  );
};
