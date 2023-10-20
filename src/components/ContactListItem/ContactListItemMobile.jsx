import { useDispatch, useSelector } from "react-redux";
import { setSelectedContactsThunk } from "redux/contacts/contacts.thunk";
import userDummy from "images/user-dummy28.jpg";
import { useState } from "react";
import { ContactInfoListMobile } from "components/ContactInfoList/ContactInfoListMobile";
import {
  ContactItem,
  ContactNameInline,
  ContactNumber,
  ContactPhotoThumb,
} from "./ContactListItemMobile.styled";
import { ContactIconsSetMobile } from "components/ContactIconsSet/ContactIconsSetMobile";

export const ContactListItemMobile = ({ contact }) => {
  const dispatch = useDispatch();
  const [showContact, setShowContact] = useState(false);
  // eslint-disable-next-line
  const [isShowBox, setIsShowBox] = useState(false);
  const selectedContact = useSelector(
    (state) => state.contacts.selectedContact
  );

  const handleItemClick = (contact) => {
    dispatch(setSelectedContactsThunk(contact));
    setShowContact(true);
    setIsShowBox(true);
  };

  return (
    <ContactItem onClick={() => handleItemClick(contact)}>
      <ContactPhotoThumb className="rotate">
        <img
          src={contact.avatar ? contact.avatar : userDummy}
          alt="Contact avatar"
        ></img>
      </ContactPhotoThumb>

      <ContactNumber>
        <ContactNameInline>{contact.name}</ContactNameInline>
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
