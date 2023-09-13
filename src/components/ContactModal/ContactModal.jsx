import { ContactForm } from "components/ContactForm/ContactForm";
import { useCallback, useEffect, useRef } from "react";

import styled from "styled-components";

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -60%);
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  background-color: #fff;

  padding: 68px 48px;
  margin: 32px;

  /* clip-path: polygon(0 8%, 100% 0, 96% 100%, 10% 100%); */
  clip-path: polygon(0 8%, 100% 0, 95% 100%, 6% 100%);
`;

export const ContactModal = (props) => {
  return (
    <ModalWindow className="modal">
      <ContactForm
        onSubmitClose={props.onClose}
        fn={props.fn}
        _id={props._id}
      />
    </ModalWindow>
  );
};
