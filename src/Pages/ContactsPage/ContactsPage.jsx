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

import { useMediaQuery } from "react-responsive";
import { ContactsAppBarTablet } from "components/ContactsAppBar/ContactsAppBarTablet";
import { UserProfileBarTablet } from "components/UserProfile/UserProfileBarTablet";
import { ContactListTablet } from "components/ContactList/ContactListTablet";
import { ContactInfoTablet } from "components/ContactInfo/ContactInfoTablet";
import { ContactListMobile } from "components/ContactList/ContactListMobile";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AppSpace = styled.div`
  position: relative;
  padding-left: 5vw;
`;

const ContactsWrapper = styled.div`
  display: flex;
  width: 75vw;
`;

export const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const sharedContact = useSelector((state) => state.contacts.sharedContact);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 689 });

  useEffect(() => {
    isLoggedIn && dispatch(fetchContactsThunk());
    sharedContact && setIsModalOpen(true);
  }, [dispatch, isLoggedIn, sharedContact]);

  const normalizedFilter = filter.toLowerCase().trim();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <Wrapper>
      {isDesktop && <UserProfile />}
      {!isDesktop && <UserProfileBarTablet />}
      <AppSpace>
        {/* <ContactsAppBar /> */}
        <ContactsAppBarTablet />

        <ContactsWrapper>
          {isDesktop && <ContactList filteredContacts={filteredContacts} />}
          {isTablet && (
            <ContactListTablet filteredContacts={filteredContacts} />
          )}
          {isMobile && (
            <ContactListMobile filteredContacts={filteredContacts} />
          )}
          {isDesktop && <ContactInfo />}
          {isTablet && <ContactInfoTablet />}
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
