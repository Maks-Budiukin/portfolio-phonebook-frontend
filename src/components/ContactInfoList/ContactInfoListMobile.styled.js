import styled from "styled-components";

export const ContactinfoListWrapper = styled.ul`
  list-style: none;
  padding: 12px;
  width: 70vw;
  font-weight: bold;

  &.block {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 1000ms;
    /* opacity: 0;
    transform: translateY(-100%);
    transition-property: transform opacity;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
  }

  &.block-show {
    /* opacity: 1;
    transform: translateY(0); */
    grid-template-rows: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  margin: 16px 0 0 0;
  padding: 8px;
  display: flex;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(6% 0, 100% 0, 100% 100%, 0% 100%);

  color: var(--yellow);
  font-weight: bold;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: -2px;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;
