import styled from "styled-components";
import { ContactIconsSet } from "components/ContactIconsSet/ContactIconsSet";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedContactsThunk } from "redux/contacts/contacts.thunk";
import userDummy from "images/user-dummy28.jpg";
import { ContactInfoItem } from "components/ContactInfoItem/ContactInfoItem";
import { ContactInfoList } from "components/ContactInfoList/ContactInfoList";
import { useEffect, useRef, useState } from "react";
import { ContactInfoListMobile } from "components/ContactInfoList/ContactInfoListMobile";

const ContactItem = styled.li`
  z-index: 2;
  margin: 1.5em 0 0.5em;
  padding: 0.73em;
  background: linear-gradient(
    83deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  position: relative;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: scale(0.84);
  transition-property: transform height;
  transition-duration: 400ms;

  &.block2 {
    max-height: 300px;

    /* max-height: 160px; */
    transition: max-height 1s ease-out;
    /* transition-property: max-height;
    transition-duration: 1400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
  }

  &.block2-show {
    max-height: 1000px;
    transition: max-height 1s ease-in;
    /* max-height: 1000px; */
  }

  &:nth-of-type(even) {
    background: linear-gradient(
      -83deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );
  }

  &:hover {
    transform: scale(0.88);
    img {
      filter: grayscale(0);
    }
  }

  .rotate {
    transform: rotate(-4deg);
  }

  &:nth-of-type(even) {
    .rotate {
      transform: rotate(2deg);
    }
  }
`;

const ContactPhotoThumb = styled.div`
  min-width: 12vmin;
  height: 12vmin;
  float: left;
  margin-right: 1.25em;
  background: linear-gradient(-75deg, var(--dark) 0 70%, var(--yellow) 0% 100%);

  transition: var(--trans);
  border-radius: 0.25em;
  overflow: hidden;
  margin-left: -3em;
  padding: 0.5em;

  &:nth-of-type(even) {
    transform: rotate(14deg);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    filter: grayscale(1);
    background: var(--dark);
    transition-property: filter;
    transition-duration: 400ms;
  }
`;

const ContactDescription = styled.div`
  padding-top: 1vmin;
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    padding: 0 2em;
    margin-bottom: 1em;
  }

  h3 {
    background: linear-gradient(182deg, #fff0 60%, var(--dark) 0 100%);
    transform: rotate(-2deg);
    margin: 0;
    margin-top: -2.25em;
    left: 9vmin;
    padding: 0.5em 0.75em;
    color: var(--yellow);
    border-radius: 0.25em;
    font-size: 1.35em;
    transform-origin: left bottom;
  }
`;

const ContactName = styled.div`
  position: absolute;
  top: -13px;
  left: 60px;
  font-size: 22px;
  padding: 4px;

  background: var(--dark);
  color: var(--yellow);

  background: linear-gradient(
    106deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

export const ContactListItemMobile = ({
  name,
  number,
  id,
  onClick,
  contact,
}) => {
  const dispatch = useDispatch();
  const [showContact, setShowContact] = useState(false);
  const selectedContact = useSelector(
    (state) => state.contacts.selectedContact
  );

  const handleItemClick = (contact) => {
    dispatch(setSelectedContactsThunk(contact));
    setShowContact(true);
  };

  return (
    <ContactItem
      onClick={() => handleItemClick(contact)}
      className={`block2 ${showContact ? " block2-show" : ""}`}
    >
      <ContactPhotoThumb className="rotate">
        <img
          src={contact.avatar ? contact.avatar : userDummy}
          alt="Contact avatar"
        ></img>
      </ContactPhotoThumb>
      <ContactName>{contact.name}</ContactName>
      {selectedContact._id !== contact._id && (
        <>
          <p>{contact.number}</p>
          <ContactIconsSet contact={contact} />
        </>
      )}
      {selectedContact._id === contact._id && showContact && (
        <ContactInfoListMobile contact={contact} />
      )}
    </ContactItem>
  );
};
