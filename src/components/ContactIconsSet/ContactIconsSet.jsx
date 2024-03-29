import { IconContext } from "react-icons";

import styled from "styled-components";
import { TfiEmail } from "react-icons/tfi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaViber } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandBitbucket } from "react-icons/tb";

const IconsSetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 180px;
`;

export const ContactIconsSet = ({ contact }) => {
  return (
    <IconContext.Provider
      value={{
        color: "var(--dark)",
        size: "1.5em",
        style: { padding: "4px" },
      }}
    >
      <IconsSetWrapper>
        {contact.email && <TfiEmail />}
        {contact.telegram && <LiaTelegramPlane />}
        {contact.linkedin && <FaLinkedin />}
        {contact.instagram && <SiInstagram />}
        {contact.github && <RxGithubLogo />}
        {/* {contact.facebook && <BsFacebook />} */}
        {contact.twitter && <SlSocialTwitter />}
        {contact.whatsapp && <BsWhatsapp />}
        {contact.viber && <FaViber />}
        {contact.bitbucket && <TbBrandBitbucket />}
      </IconsSetWrapper>
    </IconContext.Provider>
  );
};
