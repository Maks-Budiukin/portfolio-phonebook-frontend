import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 100vh;
  width: 10vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--dark);
  overflow-x: hidden;
  border-right: 1px solid silver;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BurgerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;
