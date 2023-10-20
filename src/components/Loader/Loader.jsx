import { RotatingLines } from "react-loader-spinner";
import {
  SpinnerContainer,
  SpinnerContainerMobile,
  SpinnerContainerTablet,
} from "./Loader.styled";
import { useMediaQuery } from "react-responsive";

export const Loader = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 689 });

  return (
    <>
      {isTablet && (
        <>
          <SpinnerContainerTablet>
            <RotatingLines
              strokeColor="var(--dark)"
              strokeWidth="5"
              animationDuration="0.75"
              width="28"
              visible={true}
            />
          </SpinnerContainerTablet>
        </>
      )}
      {isDesktop && (
        <>
          <SpinnerContainer>
            <RotatingLines
              strokeColor="var(--dark)"
              strokeWidth="5"
              animationDuration="0.75"
              width="28"
              visible={true}
            />
          </SpinnerContainer>
        </>
      )}
      {isMobile && (
        <>
          <SpinnerContainerMobile>
            <RotatingLines
              strokeColor="var(--dark)"
              strokeWidth="5"
              animationDuration="0.75"
              width="28"
              visible={true}
            />
          </SpinnerContainerMobile>
        </>
      )}
    </>
  );
};
