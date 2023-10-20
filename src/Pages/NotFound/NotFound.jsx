import notFoundImage from "images/404-5.jpg";
import { useMediaQuery } from "react-responsive";
import {
  NotFoundImageMobile,
  NotFoundWrapper,
  NotFoundImage,
  NotFoundSection,
  NotFoundTextDesktop,
  NotFoundTextTablet,
  NotFoundTextMobile,
  GoBackButton,
} from "./NotFound.styled";

export const NotFound = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 689 });

  return (
    <NotFoundSection>
      <NotFoundWrapper>
        {isMobile ? (
          <NotFoundImageMobile src={notFoundImage}></NotFoundImageMobile>
        ) : (
          <NotFoundImage src={notFoundImage}></NotFoundImage>
        )}
        {isMobile && <NotFoundTextMobile>PAGE NOT FOUND</NotFoundTextMobile>}
        {isTablet && <NotFoundTextTablet>PAGE NOT FOUND</NotFoundTextTablet>}
        {isDesktop && <NotFoundTextDesktop>PAGE NOT FOUND</NotFoundTextDesktop>}
        <GoBackButton to={"/"}>Go back!</GoBackButton>
      </NotFoundWrapper>
    </NotFoundSection>
  );
};
