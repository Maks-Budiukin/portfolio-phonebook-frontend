import { AppBar } from "components/AppBar/AppBar";
import { ContactList } from "components/ContactList/ContactList";
import { UserProfile } from "components/UserProfile/UserProfile";
import { fetchContactsThunk } from "redux/contacts/contacts.thunk";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";

import styled from "styled-components";
import { Portal } from "components/Portal/Portal";
import { AddContactButton } from "components/AddContactButton/AddContactButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AppSpace = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const ContactsListHeader = styled.h2`
  /* top: 70px; */
`;

const LoadingWrapper = styled.div`
  position: fixed;
  /* top: 90px; */

  /* padding-top: 130px; */
  background-color: #fff;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const [cont, setCont] = useState(contacts);

  const filter = useSelector((state) => state.filter);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContactsThunk());
  }, [dispatch, isLoggedIn, cont]);

  const normalizedFilter = filter.toLowerCase().trim();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      <UserProfile />
      <AppSpace>
        {/* <AppBar /> */}
        {/* <ContactForm /> */}
        <LoadingWrapper>
          <ContactsListHeader>
            Contact<span>s</span>
          </ContactsListHeader>
          <Filter />
          <AddContactButton />
          {isLoading && (
            <RotatingLines
              strokeColor="skyblue"
              strokeWidth="5"
              animationDuration="0.75"
              width="28"
              visible={true}
            />
          )}
        </LoadingWrapper>
        <ContactList
          filteredContacts={filteredContacts}
          isLoading={isLoading}
        />
      </AppSpace>
    </Wrapper>
  );
};

// export default ContactsPage;
