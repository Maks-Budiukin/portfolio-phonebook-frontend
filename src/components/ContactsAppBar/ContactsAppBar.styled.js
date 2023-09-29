import styled from "styled-components";

export const OuterLoadingWrapper = styled.div`
  z-index: 3;
  position: fixed;
  left: 16vw;
  width: 79vw;
  height: 70px;
  background: linear-gradient(
    -104deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  left: 34px;
  z-index: 2;
  background-color: #fff;
  width: 79vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--yellow);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
