import { RotatingLines } from "react-loader-spinner";
import { SpinnerContainer } from "./Loader.styled";

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
