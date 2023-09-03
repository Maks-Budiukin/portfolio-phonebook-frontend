import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactsThunk,
  editContactsThunk,
} from "redux/contacts/contacts.thunk";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrEdit } from "react-icons/gr";
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

const Wrapper = styled.div`
  //тут работало
  position: sticky;
  top: 70px;
  color: #fff;
  width: 34vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  background-color: #2f313a;

  p {
    height: 14px;
    margin-right: auto;
    margin-left: 8px;
  }
`;

const AvatarThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 220px;
  background: linear-gradient(-93deg, #2f313a, #333 33%, #ffdd40 95%, #333 65%);
  background-color: #ffdd40;
`;

const UserAvatar = styled.div`
  width: 200px;
  height: 200px;
  /* background-color: tomato; */

  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ContactinfoList = styled.ul`
  list-style: none;
  padding: 12px;
`;

export const ContactInfo = () => {
  // const contact = useSelector((state) =>
  //   state.contacts.items.find((contact) => contact._id === chosenContactID)
  // );

  const contact = useSelector((state) => state.contacts.selectedContact);

  const contacts = useSelector((state) => state.contacts.items);

  return (
    <Wrapper>
      {contact && (
        <>
          <h2>{contact.name}</h2>
          <AvatarThumb>
            <UserAvatar>
              <img src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg?format=1500w"></img>
            </UserAvatar>
          </AvatarThumb>
          <ButtonContainer>
            <EditContactButton _id={contact._id} />
            <ContactDeleteButton _id={contact._id} />
          </ButtonContainer>
          <ContactinfoList>
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
          </ContactinfoList>
        </>
      )}
    </Wrapper>
  );
};
