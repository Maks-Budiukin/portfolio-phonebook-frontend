import styled from "styled-components";

export const ShadowWrapper = styled.div`
  position: fixed;
  left: 6.5vw;
  z-index: 3;
  width: 89vw;
  filter: drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.2));
`;

export const LoadingWrapper = styled.div`
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--yellow);

  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
`;
