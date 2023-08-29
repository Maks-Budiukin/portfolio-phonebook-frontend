import { IconContext } from "react-icons";

import styled from "styled-components";
import { TfiEmail } from "react-icons/tfi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaViber } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandBitbucket } from "react-icons/tb";

const IconsSetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 180px;
`;

export const ContactIconsSet = () => {
  return (
    <IconContext.Provider
      value={{
        color: "black",
        size: "1.5em",
        className: "global-class-name",
        style: { padding: "4px" },
      }}
    >
      <IconsSetWrapper>
        <TfiEmail />
        <LiaTelegramPlane />
        <FaLinkedin />
        <SiInstagram />
        <RxGithubLogo />
        <BsFacebook />
        <SlSocialTwitter />
        <BsWhatsapp />
        <FaViber />
        <TbBrandBitbucket />
      </IconsSetWrapper>
    </IconContext.Provider>
  );
};
