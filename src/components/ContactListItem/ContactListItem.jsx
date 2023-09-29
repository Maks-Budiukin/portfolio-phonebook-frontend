import { ContactIconsSet } from "components/ContactIconsSet/ContactIconsSet";
import { useDispatch } from "react-redux";
import { setSelectedContactsThunk } from "redux/contacts/contacts.thunk";
import userDummy from "images/user-dummy28.jpg";
import {
  ContactDescription,
  ContactItem,
  ContactName,
  ContactPhotoThumb,
} from "./ContactListItem.styled";

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleItemClick = (contact) => {
    dispatch(setSelectedContactsThunk(contact));
  };

  return (
    <ContactItem onClick={() => handleItemClick(contact)}>
      <ContactPhotoThumb className="rotate">
        <img
          src={contact.avatar ? contact.avatar : userDummy}
          alt="Contact avatar"
        ></img>
      </ContactPhotoThumb>

      <ContactDescription>
        <ContactName>{contact.name}</ContactName> <p>{contact.number}</p>
        <ContactIconsSet contact={contact} />
      </ContactDescription>
    </ContactItem>
  );
};
