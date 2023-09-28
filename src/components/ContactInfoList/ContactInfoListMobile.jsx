import { ContactInfoItem } from "components/ContactInfoItem/ContactInfoItem";
import { useSelector } from "react-redux";

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
} from "./handleContactInput";

import styled from "styled-components";
import { useEffect, useState } from "react";

const ContactinfoListWrapper = styled.ul`
  list-style: none;
  padding: 12px;
  width: 70vw;

  &.block {
    opacity: 0;
    transform: translateY(-100%);
    transition-property: transform opacity;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactInfoListMobile = ({ contact }) => {
  // const contact = useSelector((state) => state.contacts.selectedContact);
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <ContactinfoListWrapper
        className={`block ${isShowBox ? " block-show" : ""}`}
      >
        {contact.number && (
          <ContactInfoItem
            data={`callto:${contact.number}`}
            icon={<FaPhoneSquare />}
            title={contact.number}
          />
        )}

        {contact.email && (
          <ContactInfoItem
            data={`mailto:${contact.email}`}
            icon={<TfiEmail />}
            title={contact.email}
          />
        )}
        {contact.telegram && (
          <ContactInfoItem
            data={handleTelegramLink(contact.telegram)}
            icon={<LiaTelegramPlane />}
            title={handleTelegramURL(contact.telegram)}
          />
        )}
        {contact.whatsapp && (
          <ContactInfoItem
            data={`https://wa.me/${contact.whatsapp}`}
            icon={<BsWhatsapp />}
            title={contact.whatsapp}
          />
        )}
        {contact.viber && (
          <ContactInfoItem
            data={`viber://chat?number=%2B${contact.viber}`}
            icon={<FaViber />}
            title={contact.viber}
          />
        )}
        {contact.instagram && (
          <ContactInfoItem
            data={handleInstagramLink(contact.instagram)}
            icon={<SiInstagram />}
            title={handleInstagramURL(contact.instagram)}
          />
        )}
        {contact.facebook && (
          <ContactInfoItem
            data={handleFacebookLink(contact.facebook)}
            icon={<BsFacebook />}
            title={handleFacebookURL(contact.facebook)}
          />
        )}
        {contact.linkedin && (
          <ContactInfoItem
            data={contact.linkedin}
            icon={<FaLinkedin />}
            title={handleLinkedInURL(contact.linkedin)}
          />
        )}
        {contact.twitter && (
          <ContactInfoItem
            data={handleTwitterLink(contact.twitter)}
            icon={<SlSocialTwitter />}
            title={handleTwitterURL(contact.twitter)}
          />
        )}
        {contact.github && (
          <ContactInfoItem
            data={handleGithubLink(contact.github)}
            icon={<RxGithubLogo />}
            title={handleGithubURL(contact.github)}
          />
        )}

        {contact.bitbucket && (
          <ContactInfoItem
            data={handleBitbucketLink(contact.bitbucket)}
            icon={<TbBrandBitbucket />}
            title={handleBitbucketURL(contact.bitbucket)}
          />
        )}
      </ContactinfoListWrapper>
    </div>
  );
};
