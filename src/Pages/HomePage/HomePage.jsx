import LoginForm from "components/LoginForm/LoginForm";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { useState } from "react";
import styled from "styled-components";
import logo from "images/logo1.png";
import demoDevices from "images/demoDevices.jpg";
import demoCreate from "images/gettyDemo2.jpg";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiRedux } from "react-icons/si";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const LandingSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const AuthContainer = styled.section`
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background-color: var(--yellow);

  scroll-snap-align: start;
`;

const AuthThumb = styled.div`
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoThumb = styled.div`
  /* max-width: 250px; */
  object-fit: cover;
  padding: 32px;
`;

const Logo = styled.img`
  width: 450px;
  max-width: 90vw;
  object-fit: contain;
`;

const LogoMobile = styled.img`
  /* width: 400px; */
  max-width: 80vw;
  object-fit: contain;
`;

const SwitchButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  font-size: 16px;
  font-style: italic;
  cursor: pointer;
`;

const SwitchContainer = styled.div`
  padding: 12px;
  text-align: center;
  border-top: 5px solid var(--dark);
`;

const LandingSidebar = styled.div`
  background-color: var(--dark);
  clip-path: polygon(0 0, 74% 0, 100% 100%, 0% 100%);
  width: 25vw;
  height: 100vh;
  margin-right: auto;
  position: absolute;
  left: 0;
  top: 0;
`;

const LandingSidebarTablet = styled.div`
  background-color: var(--dark);
  clip-path: polygon(0 0, 74% 0, 100% 100%, 0% 100%);
  width: 15vw;
  height: 100vh;
  margin-right: auto;
  position: absolute;
  left: 0;
  top: 0;
`;

//================================== CREATE ===================

const PromoContainerCreate = styled.section`
  background-color: var(--dark);
  display: flex;
  gap: 5vw;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
  max-height: 100vh;

  scroll-snap-align: start;

  h2 {
    text-align: right;
    padding: 16px 46px;
    font-size: 48px;
    font-weight: bold;
    color: var(--dark);
    /* font-style: italic; */
  }

  p {
    margin: 0 -16px 0 -46px;
    color: var(--dark);
    padding: 16px;
    background: linear-gradient(
      -95deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );

    text-align: center;
    width: 30vw;
    font-size: 28px;
    font-weight: bold;

    box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const PromoContainerCreateMobile = styled.section`
  position: relative;
  /* background-color: rgba(185, 185, 185, 0.146); */

  background-color: var(--dark);
  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;

  h2 {
    margin: 0;
    padding: 16px 16px;
    font-size: 48px;
    font-weight: bold;
    color: var(--dark);
    text-align: right;
  }

  p {
    margin: 0 0 0 -46px;
    color: var(--dark);
    padding: 16px;
    background: linear-gradient(
      -93deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );

    text-align: center;
    width: 78vw;
    font-size: 28px;
    font-weight: bold;

    box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const CreateCtaContainer = styled.div`
  /* background-color: var(--yellow); */
  margin-right: 3vw;
  background-color: rgb(238, 238, 238);
`;

const CreateCtaContainerMobile = styled.div`
  /* background-color: var(--yellow); */
  height: 50vh;
  margin-left: 20vw;
  background-color: rgb(238, 238, 238);
`;

const DevicesImageCreate = styled.img`
  margin-top: 10vh;

  width: 45vw;
`;

const DevicesImageCreateMobile = styled.img`
  max-width: 100vw;
  max-height: 50vh;
`;

//================================== CREATE ==================

//================================== SHARE ==================

const PromoContainerShare = styled.section`
  position: relative;
  background-color: rgba(185, 185, 185, 0.146);

  display: flex;
  gap: 5vw;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;

  h2 {
    padding: 16px 46px;
    font-size: 48px;
    font-weight: bold;
    color: #fff;
  }

  p {
    margin: 0 -46px 0 -16px;
    color: var(--dark);
    padding: 16px;
    background: linear-gradient(
      95deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );

    text-align: center;
    width: 30vw;
    font-size: 28px;
    font-weight: bold;

    box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const PromoContainerShareMobile = styled.section`
  position: relative;
  background-color: rgba(185, 185, 185, 0.146);

  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;

  h2 {
    margin: 0;
    padding: 16px 16px;
    font-size: 48px;
    font-weight: bold;
    color: #fff;
  }

  p {
    color: var(--dark);
    padding: 16px;
    background: linear-gradient(
      93deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );

    text-align: center;
    width: 78vw;
    font-size: 28px;
    font-weight: bold;

    box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ShareCtaContainer = styled.div`
  background-color: var(--dark);
  margin-left: 3vw;
`;

const ShareCtaContainerMobile = styled.div`
  background-color: var(--dark);
  margin-right: 20vw;
  height: 50vh;
`;

const DevicesImageShare = styled.img`
  margin-top: 10vh;

  width: 60vw;
`;

const DevicesImageShareMobile = styled.img`
  max-width: 100vw;
  max-height: 50vh;
`;

//================================== SHARE ==================

//================================== JOIN ==================

const PromoContainerJoinMobile = styled.section`
  position: relative;
  background-color: rgba(185, 185, 185, 0.146);

  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;
`;

const PromoContainerJoin = styled.section`
  position: relative;
  background-color: rgba(185, 185, 185, 0.146);

  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;
`;

const JoinContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const JoinButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 7% 100%);

  color: var(--dark);
  font-weight: bold;
  font-size: 24px;
  padding: 24px 56px;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const JoinButtonMobile = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 7% 100%);

  color: var(--dark);
  font-weight: bold;
  font-size: 24px;
  padding: 24px 56px;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const CreatedWithMobile = styled.div`
  height: 60vh;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CreatedWith = styled.div`
  height: 40vh;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CreatedIconsWrapperMobile = styled.div`
  max-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8vw;
`;

const CreatedIconsWrapper = styled.div`
  max-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8vw;
`;

const CreatedTextMobile = styled.p`
  color: var(--yellow);
  font-weight: bold;
  font-size: 36px;
`;

const CreatedText = styled.p`
  color: var(--yellow);
  font-weight: bold;
  font-size: 36px;
`;

//================================== JOIN ==================

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
      {/* {isMobile ? () : ()} */}
      {isMobile && (
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
      )}

      {!isMobile && (
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
      )}

      {isMobile && (
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
      )}
      {!isMobile && (
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
      )}
      {isMobile && (
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
      )}
      {!isMobile && (
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
      )}
    </LandingSection>
  );
};
