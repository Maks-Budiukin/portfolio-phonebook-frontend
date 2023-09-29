import styled from "styled-components";

export const ModalWindow = styled.div`
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 0, 98% 100%, 4% 100%);

  padding: 68px 48px;

  &.block {
    transform: scale(0.95);
    transition-property: transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    transform: scale(1);
  }
`;
