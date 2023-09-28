import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/auth/auth.thunk";
import { BiLogOut } from "react-icons/bi";

import styled from "styled-components";
import { UserProfileItem } from "components/UserProfileItem/UserProfileItem";

import { TfiEmail } from "react-icons/tfi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaViber, FaPhoneSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandBitbucket } from "react-icons/tb";

import {
  handleTelegramURL,
  handleTelegramLink,
  handleTwitterURL,
  handleTwitterLink,
  handleInstagramURL,
  handleInstagramLink,
  handleGithubURL,
  handleGithubLink,
  handleBitbucketURL,
  handleBitbucketLink,
  handleFacebookURL,
  handleFacebookLink,
  handleLinkedInURL,
} from "../ContactInfo/handleContactInput";
import { UserEditButton } from "components/UserEditButton/UserEditButton";
import { ShareLinkButton } from "components/ShareLinkButton/ShareLinkButton";
import { UserQR } from "components/UserQR/UserQR";

import userDummy from "images/user-dummy28.jpg";

import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const ProfileContainer = styled.div`
  height: 100vh;
  width: 10vw;
  position: fixed;
  /* overflow-y: scroll; */
  z-index: 1;
  top: 0;
  left: 0;
  /* bottom: 45vw; */
  background-color: var(--dark);
  /* color: #fff; */
  overflow-x: hidden;
  /* padding-top: 20px;
  padding-left: 16px; */
  border-right: 1px solid silver;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BurgerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const UserProfileBarTablet = () => {
  return (
    <>
      <ProfileContainer>
        <BurgerButtonContainer>
          <IconContext.Provider
            value={{
              color: "var(--yellow)",
              size: "36",

              style: { paddingRight: "16px" },
            }}
          >
            <RxHamburgerMenu />
          </IconContext.Provider>
        </BurgerButtonContainer>
      </ProfileContainer>
    </>
  );
};
