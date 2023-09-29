import { ContactIconsSet } from "components/ContactIconsSet/ContactIconsSet";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedContactsThunk } from "redux/contacts/contacts.thunk";
import userDummy from "images/user-dummy28.jpg";
import { useState } from "react";
import { ContactInfoListMobile } from "components/ContactInfoList/ContactInfoListMobile";
import {
  ContactItem,
  ContactName,
  ContactPhotoThumb,
} from "./ContactListItemMobile.styled";

export const ContactListItemMobile = ({ contact }) => {
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
