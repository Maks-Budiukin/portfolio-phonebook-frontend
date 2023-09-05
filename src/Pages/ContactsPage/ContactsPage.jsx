import { ContactList } from "components/ContactList/ContactList";
import { UserProfile } from "components/UserProfile/UserProfile";
import { fetchContactsThunk } from "redux/contacts/contacts.thunk";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { ContactInfo } from "components/ContactInfo/ContactInfo";
import { ContactsAppBar } from "components/ContactsAppBar/ContactsAppBar";
import { Portal } from "components/Portal/Portal";
import { ContactModal } from "components/ContactModal/ContactModal";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AppSpace = styled.div`
  position: relative;

  padding-left: 20vw;
  /* padding-right: 16px; */
`;

const ContactsWrapper = styled.div`
  display: flex;
  width: 75vw;
`;

export const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const sharedContact = useSelector((state) => state.contacts.sharedContact);
  const [cont, setCont] = useState(contacts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContactsThunk());
    sharedContact && setIsModalOpen(true);
  }, [dispatch, isLoggedIn, cont, sharedContact]);

  const normalizedFilter = filter.toLowerCase().trim();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <Wrapper>
      <UserProfile />
      <AppSpace>
        <ContactsAppBar />

        <ContactsWrapper>
          <ContactList filteredContacts={filteredContacts} />
          <ContactInfo />
        </ContactsWrapper>
      </AppSpace>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={"add"}
          />
        </Portal>
      )}
    </Wrapper>
  );
};
