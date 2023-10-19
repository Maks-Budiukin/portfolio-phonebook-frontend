import { useSelector } from "react-redux";

import { ContactDeleteButton } from "components/ContactDeleteButton/ContactDeleteButton";

import userDummy from "images/user-dummy28.jpg";
import { ContactInfoList } from "components/ContactInfoList/ContactInfoList";
import { ModalButton } from "components/ModalButton/Modal.Button";
import {
  AvatarThumb,
  ButtonContainer,
  UserAvatar,
  Wrapper,
} from "./ContactInfoTablet.styled";

export const ContactInfoTablet = () => {
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
              <ModalButton
                fn={"editContact"}
                label={"Edit contact"}
                _id={contact._id}
              />
              {/* <ContactDeleteButton _id={contact._id} /> */}
              <ModalButton
                fn={"deleteContact"}
                label={"Delete contact"}
                _id={contact._id}
              />
            </ButtonContainer>
          </AvatarThumb>
          <ContactInfoList contact={contact} />
        </>
      )}
    </Wrapper>
  );
};
