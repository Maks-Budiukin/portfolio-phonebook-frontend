import { ContactIconsSet } from "components/ContactIconsSet/ContactIconsSet";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedContactsThunk } from "redux/contacts/contacts.thunk";
import userDummy from "images/user-dummy28.jpg";
import { useEffect, useState } from "react";
import { ContactInfoListMobile } from "components/ContactInfoList/ContactInfoListMobile";
import {
  ContactItem,
  ContactName,
  ContactNameInline,
  ContactNumber,
  ContactPhotoThumb,
} from "./ContactListItemMobile.styled";
import { ContactIconsSetMobile } from "components/ContactIconsSet/ContactIconsSetMobile";

export const ContactListItemMobile = ({ contact }) => {
  const dispatch = useDispatch();
  const [showContact, setShowContact] = useState(false);
  const [isShowBox, setIsShowBox] = useState(false);
  const selectedContact = useSelector(
    (state) => state.contacts.selectedContact
  );

  const handleItemClick = (contact) => {
    dispatch(setSelectedContactsThunk(contact));
    setShowContact(true);
    setIsShowBox(true);
  };

  // useEffect(() => {
  //   setTimeout(() => setIsShowBox(true));
  // }, []);

  return (
    <ContactItem
      onClick={() => handleItemClick(contact)}
      // className={`block ${isShowBox ? " block-show" : ""}`}
    >
      <ContactPhotoThumb className="rotate">
        <img
          src={contact.avatar ? contact.avatar : userDummy}
          alt="Contact avatar"
        ></img>
      </ContactPhotoThumb>
      {/* <ContactName>{contact.name}</ContactName> */}
      {/* {selectedContact._id !== contact._id && (
        <>
          <p>{contact.number}</p>
          <ContactIconsSet contact={contact} />
        </>
      )} */}

      <ContactNumber>
        <ContactNameInline>{contact.name}</ContactNameInline>
        {/* {contact.number} */}
        <ContactIconsSetMobile contact={contact} />
      </ContactNumber>

      <div
        className={`block ${
          selectedContact._id === contact._id ? "block-show" : ""
        }`}
      >
        {selectedContact._id === contact._id && showContact && (
          <ContactInfoListMobile contact={contact} />
        )}
      </div>
    </ContactItem>
  );
};
