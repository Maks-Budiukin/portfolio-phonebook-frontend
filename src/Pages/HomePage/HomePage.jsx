import LoginForm from "components/LoginForm/LoginForm";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { useState } from "react";
import styled from "styled-components";
import logo from "images/logo1.png";
import allDevices from "images/allDevices.jpg";
import demoDevices from "images/demoDevices.jpg";
import demoCreate from "images/gettyDemo2.jpg";

import { useRef } from "react";

const LandingSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const AuthContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background-color: var(--yellow);

  scroll-snap-align: start;
`;

const LogoThumb = styled.div`
  /* max-width: 250px; */
  object-fit: cover;
  padding: 32px;
`;

const Logo = styled.img`
  max-width: 450px;
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
  border-top: 5px solid var(--dark);
`;

const LandingSidebar = styled.div`
  background-color: var(--dark);
  clip-path: polygon(0 0, 74% 0, 100% 100%, 0% 100%);
  /* background: linear-gradient(
    91deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  ); */
  width: 25vw;
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
    /* background-color: var(--yellow); */
    /* z-index: 2; */
    margin: 0 -16px 0 -46px;
    color: var(--dark);
    padding: 16px;
    background: linear-gradient(
      -95deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );

    text-align: center;
    width: 35vw;
    font-size: 28px;
    font-weight: bold;
    /* font-style: italic; */

    box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const CreateCtaContainer = styled.div`
  /* background-color: var(--yellow); */
  margin-right: 5vw;
  background-color: rgb(238, 238, 238);
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
    /* font-style: italic; */
  }

  p {
    /* background-color: var(--yellow); */
    /* z-index: 2; */
    margin: 0 -46px 0 -16px;
    color: var(--dark);
    padding: 16px;
    background: linear-gradient(
      95deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );

    text-align: center;
    width: 35vw;
    font-size: 28px;
    font-weight: bold;
    /* font-style: italic; */

    box-shadow: -3px -3px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ShareWrapper = styled.div`
  display: flex;
  gap: 5vw;
  justify-content: center;

  /* width: 100%; */
  /* height: 80vh; */
`;

const ShareCtaContainer = styled.div`
  background-color: var(--dark);
`;

const DevicesImage = styled.img`
  margin-top: 10vh;

  width: 50vw;
`;

const JoinButton = styled.button`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 7vh;
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
  /* margin-top: -20vh;
  margin-bottom: 20vh; */
  margin-left: auto;
  margin-right: 6vw;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

//================================== SHARE ==================

export const HomePage = () => {
  const [registered, setRegistered] = useState(false);

  const ref = useRef(null);

  const handleUpClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleRegistered = () => {
    setRegistered((pS) => !pS);
  };

  return (
    <LandingSection>
      <AuthContainer ref={ref}>
        <LandingSidebar />
        <LogoThumb>
          <Logo
            src={logo}
            alt="Digital Visicard"
          />
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
      </AuthContainer>
      <PromoContainerCreate>
        <div>
          <DevicesImage
            src={demoCreate}
            alt="devices pic"
          ></DevicesImage>
        </div>

        <CreateCtaContainer>
          <h2>Create!</h2>
          <p>
            Create your Digital Visit Card and save all your contact information
            in one place!
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
          <DevicesImage
            src={demoDevices}
            alt="devices pic"
          ></DevicesImage>
        </div>

        <JoinButton onClick={handleUpClick}>Join now!</JoinButton>
      </PromoContainerShare>
    </LandingSection>
  );
};
