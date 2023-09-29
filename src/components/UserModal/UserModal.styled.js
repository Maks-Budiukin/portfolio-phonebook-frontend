import styled from "styled-components";

export const ModalWindow = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);

  &.block {
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    transform: translateX(0);
  }
`;
