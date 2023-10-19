import LoginForm from "components/LoginForm/LoginForm";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { useState } from "react";

import logo from "images/logo1.png";
import demoDevices from "images/demoDevices.jpg";
import demoCreate from "images/gettyDemo2.jpg";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiRedux } from "react-icons/si";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import {
  PromoContainerCreateMobile,
  LandingSection,
  AuthContainer,
  AuthThumb,
  LogoThumb,
  Logo,
  LogoMobile,
  SwitchButton,
  SwitchContainer,
  LandingSidebar,
  LandingSidebarTablet,
  PromoContainerCreate,
  CreateCtaContainer,
  CreateCtaContainerMobile,
  DevicesImageCreate,
  DevicesImageCreateMobile,
  PromoContainerShare,
  PromoContainerShareMobile,
  ShareCtaContainer,
  ShareCtaContainerMobile,
  DevicesImageShare,
  DevicesImageShareMobile,
  PromoContainerJoinMobile,
  PromoContainerJoin,
  JoinContainerMobile,
  JoinContainer,
  JoinButton,
  JoinButtonMobile,
  CreatedWithMobile,
  CreatedWith,
  CreatedIconsWrapperMobile,
  CreatedIconsWrapper,
  CreatedTextMobile,
  CreatedText,
} from "./HomePage.styled";

export const HomePage = () => {
  const [registered, setRegistered] = useState(false);

  const ref = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 689 });

  const handleUpClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleRegistered = () => {
    setRegistered((pS) => !pS);
  };

  return (
    <LandingSection>
      <AuthContainer ref={ref}>
        <AuthThumb>
          {isDesktop && <LandingSidebar />}
          {isTablet && <LandingSidebarTablet />}
          <LogoThumb>
            {isMobile && (
              <LogoMobile
                src={logo}
                alt="Digital Visicard"
              />
            )}
            {!isMobile && (
              <Logo
                src={logo}
                alt="Digital Visicard"
              />
            )}
          </LogoThumb>
          {registered ? (
            <>
              <RegisterForm></RegisterForm>
              <SwitchContainer>
                Already registered?
                <SwitchButton
                  type="button"
                  onClick={toggleRegistered}
                >
                  {" "}
                  Login!
                </SwitchButton>
              </SwitchContainer>
            </>
          ) : (
            <>
              <LoginForm></LoginForm>
              <SwitchContainer>
                Don't have an account?
                <SwitchButton
                  type="button"
                  onClick={toggleRegistered}
                >
                  Register
                </SwitchButton>
              </SwitchContainer>
            </>
          )}
        </AuthThumb>
      </AuthContainer>
      {isMobile ? (
        <>
          <PromoContainerCreateMobile>
            <CreateCtaContainerMobile>
              <h2>Create!</h2>
              <p>
                Create your Digital Visit Card and save all your contact
                information in one place!
              </p>
            </CreateCtaContainerMobile>
            <div>
              <DevicesImageCreateMobile
                src={demoCreate}
                alt="devices pic"
              ></DevicesImageCreateMobile>
            </div>
          </PromoContainerCreateMobile>
          <PromoContainerShareMobile>
            <ShareCtaContainerMobile>
              <h2>Share!</h2>
              <p>
                Share link or a fancy QR code of your contact information with
                friends, co-workers, in CV or media just in one click!
              </p>
            </ShareCtaContainerMobile>
            <div>
              <DevicesImageShareMobile
                src={demoDevices}
                alt="devices pic"
              ></DevicesImageShareMobile>
            </div>
          </PromoContainerShareMobile>
          <PromoContainerJoinMobile>
            <JoinContainerMobile>
              <JoinButtonMobile onClick={handleUpClick}>
                Join now!
              </JoinButtonMobile>
            </JoinContainerMobile>

            <CreatedWithMobile>
              <CreatedTextMobile>CREATED WITH</CreatedTextMobile>
              <CreatedIconsWrapperMobile>
                <IconContext.Provider
                  value={{
                    color: "var(--yellow)",
                    size: "5.5em",
                    style: { padding: "4px" },
                  }}
                >
                  <FaReact />
                  <SiNestjs />
                  <SiTypescript />
                  <SiRedux />
                </IconContext.Provider>
              </CreatedIconsWrapperMobile>
            </CreatedWithMobile>
          </PromoContainerJoinMobile>
        </>
      ) : (
        <>
          <PromoContainerCreate>
            <div>
              <DevicesImageCreate
                src={demoCreate}
                alt="devices pic"
              ></DevicesImageCreate>
            </div>

            <CreateCtaContainer>
              <h2>Create!</h2>
              <p>
                Create your Digital Visit Card and save all your contact
                information in one place!
              </p>
            </CreateCtaContainer>
          </PromoContainerCreate>
          <PromoContainerShare>
            <ShareCtaContainer>
              <h2>Share!</h2>
              <p>
                Share link or a fancy QR code of your contact information with
                friends, co-workers, in CV or media just in one click!
              </p>
            </ShareCtaContainer>
            <div>
              <DevicesImageShare
                src={demoDevices}
                alt="devices pic"
              ></DevicesImageShare>
            </div>
          </PromoContainerShare>
          <PromoContainerJoin>
            <JoinContainer>
              <JoinButton onClick={handleUpClick}>Join now!</JoinButton>
            </JoinContainer>

            <CreatedWith>
              <CreatedText>CREATED WITH</CreatedText>
              <CreatedIconsWrapper>
                <IconContext.Provider
                  value={{
                    color: "var(--yellow)",
                    size: "5.5em",
                    style: { padding: "4px" },
                  }}
                >
                  <FaReact />
                  <SiNestjs />
                  <SiTypescript />
                  <SiRedux />
                </IconContext.Provider>
              </CreatedIconsWrapper>
            </CreatedWith>
          </PromoContainerJoin>
        </>
      )}
    </LandingSection>
  );
};
