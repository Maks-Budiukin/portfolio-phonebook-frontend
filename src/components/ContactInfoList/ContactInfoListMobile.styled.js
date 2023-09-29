import styled from "styled-components";

export const ContactinfoListWrapper = styled.ul`
  list-style: none;
  padding: 12px;
  width: 70vw;

  &.block {
    opacity: 0;
    transform: translateY(-100%);
    transition-property: transform opacity;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    opacity: 1;
    transform: translateY(0);
  }
`;
