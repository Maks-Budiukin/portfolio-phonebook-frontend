import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: none;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  &.block {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &.block-show {
    opacity: 1;
  }
`;
