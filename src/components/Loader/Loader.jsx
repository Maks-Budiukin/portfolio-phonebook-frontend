import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

const SpinnerContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Loader = () => {
  return (
    <SpinnerContainer>
      <RotatingLines
        strokeColor="var(--dark)"
        strokeWidth="5"
        animationDuration="0.75"
        width="28"
        visible={true}
      />
    </SpinnerContainer>
  );
};
