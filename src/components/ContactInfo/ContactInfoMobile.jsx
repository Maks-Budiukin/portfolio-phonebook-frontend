import { useSelector } from "react-redux";

import styled from "styled-components";
import { ContactInfoItem } from "components/ContactInfoItem/ContactInfoItem";

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
import { EditContactButton } from "components/ContactEditButton/ContactEditButton";
import { ContactDeleteButton } from "components/ContactDeleteButton/ContactDeleteButton";

import userDummy from "images/user-dummy28.jpg";
import { ContactInfoList } from "components/ContactInfoList/ContactInfoList";

const Wrapper = styled.div`
  //тут работало
  position: fixed;
  right: 4vw;
  top: 70px;
  color: #fff;

  width: 32vw;
  min-width: 220px;
  height: 90vh;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--dark);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  p {
    height: 14px;
    margin-right: auto;
    margin-left: 8px;
  }
`;

const AvatarThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26vw;
  min-width: 190px;

  /* min-height: 38vh; */
  clip-path: polygon(0 0, 100% 2%, 100% 100%, 8% 100%);
  background-color: var(--yellow);
  padding-left: 12px;
  padding-top: 4px;
`;

const UserAvatar = styled.div`
  width: 23vw;
  min-width: 170px;
  max-width: 200px;

  height: 200px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
`;

export const ContactInfoMobile = () => {
  const contact = useSelector((state) => state.contacts.selectedContact);

  return (
    <Wrapper>
      {contact && (
        <>
          <h2>{contact.name}</h2>
          <AvatarThumb>
            <UserAvatar>
              <img
                src={contact.avatar ? contact.avatar : userDummy}
                alt="User avatar"
              ></img>
            </UserAvatar>
            <ButtonContainer>
              <EditContactButton _id={contact._id} />
              <ContactDeleteButton _id={contact._id} />
            </ButtonContainer>
          </AvatarThumb>
          <ContactInfoList />
        </>
      )}
    </Wrapper>
  );
};
