import { useSelector } from "react-redux";

import { ContactDeleteButton } from "components/ContactDeleteButton/ContactDeleteButton";

import userDummy from "images/user-dummy28.jpg";
import { ContactInfoList } from "components/ContactInfoList/ContactInfoList";
import {
  AvatarThumb,
  ButtonContainer,
  UserAvatar,
  Wrapper,
} from "./ContactInfoMobile.styled";

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
              <ModalButton
                fn={"editContact"}
                label={"Edit contact"}
                _id={contact._id}
              />
              <ContactDeleteButton _id={contact._id} />
            </ButtonContainer>
          </AvatarThumb>
          <ContactInfoList />
        </>
      )}
    </Wrapper>
  );
};
