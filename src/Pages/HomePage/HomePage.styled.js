import styled from "styled-components";

export const LandingSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const AuthContainer = styled.section`
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

export const AuthThumb = styled.div`
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoThumb = styled.div`
  /* max-width: 250px; */
  object-fit: cover;
  padding: 32px;
`;

export const Logo = styled.img`
  width: 450px;
  max-width: 90vw;
  object-fit: contain;
`;

export const LogoMobile = styled.img`
  /* width: 400px; */
  max-width: 80vw;
  object-fit: contain;
`;

export const SwitchButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  font-size: 16px;
  font-style: italic;
  cursor: pointer;
`;

export const SwitchContainer = styled.div`
  padding: 12px;
  text-align: center;
  border-top: 5px solid var(--dark);
`;

export const LandingSidebar = styled.div`
  background-color: var(--dark);
  clip-path: polygon(0 0, 74% 0, 100% 100%, 0% 100%);
  width: 25vw;
  height: 100vh;
  margin-right: auto;
  position: absolute;
  left: 0;
  top: 0;
`;

export const LandingSidebarTablet = styled.div`
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

export const PromoContainerCreate = styled.section`
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

export const PromoContainerCreateMobile = styled.section`
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

export const CreateCtaContainer = styled.div`
  /* background-color: var(--yellow); */
  margin-right: 3vw;
  background-color: rgb(238, 238, 238);
`;

export const CreateCtaContainerMobile = styled.div`
  /* background-color: var(--yellow); */
  height: 50vh;
  margin-left: 20vw;
  background-color: rgb(238, 238, 238);
`;

export const DevicesImageCreate = styled.img`
  margin-top: 10vh;

  width: 45vw;
`;

export const DevicesImageCreateMobile = styled.img`
  max-width: 100vw;
  max-height: 50vh;
`;

//================================== CREATE ==================

//================================== SHARE ==================

export const PromoContainerShare = styled.section`
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

export const PromoContainerShareMobile = styled.section`
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

export const ShareCtaContainer = styled.div`
  background-color: var(--dark);
  margin-left: 3vw;
`;

export const ShareCtaContainerMobile = styled.div`
  background-color: var(--dark);
  margin-right: 20vw;
  height: 50vh;
`;

export const DevicesImageShare = styled.img`
  margin-top: 10vh;

  width: 60vw;
`;

export const DevicesImageShareMobile = styled.img`
  max-width: 100vw;
  max-height: 50vh;
`;

//================================== SHARE ==================

//================================== JOIN ==================

export const PromoContainerJoinMobile = styled.section`
  position: relative;
  background-color: rgba(185, 185, 185, 0.146);

  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;
`;

export const PromoContainerJoin = styled.section`
  position: relative;
  background-color: rgba(185, 185, 185, 0.146);

  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;
`;

export const JoinContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const JoinButton = styled.button`
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

export const JoinButtonMobile = styled.button`
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

export const CreatedWithMobile = styled.div`
  height: 60vh;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CreatedWith = styled.div`
  height: 40vh;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CreatedIconsWrapperMobile = styled.div`
  max-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8vw;
`;

export const CreatedIconsWrapper = styled.div`
  max-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8vw;
`;

export const CreatedTextMobile = styled.p`
  color: var(--yellow);
  font-weight: bold;
  font-size: 36px;
`;

export const CreatedText = styled.p`
  color: var(--yellow);
  font-weight: bold;
  font-size: 36px;
`;

//================================== JOIN ==================
