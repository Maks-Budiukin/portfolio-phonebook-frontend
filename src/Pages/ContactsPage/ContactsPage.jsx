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
import { ContactInfo } from "components/ContactInfo/ContactInfo";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AppSpace = styled.div`
  position: relative;

  padding-left: 17vw;
  /* padding-right: 16px; */
`;

const OuterLoadingWrapper = styled.div`
  z-index: 1;
  position: fixed;
  left: 16vw;
  width: 79vw;
  height: 70px;
  background: linear-gradient(
    -104deg,
    #ffdd40 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

const LoadingWrapper = styled.div`
  position: absolute;
  left: 30px;
  /* top: 90px; */

  /* padding-top: 130px; */
  z-index: 2;
  background-color: #fff;
  width: 79vw;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #ffdd40;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const ContactsWrapper = styled.div`
  display: flex;
  width: 75vw;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const [cont, setCont] = useState(contacts);

  const [chosenContactID, setChosenContactID] = useState(null);

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

  const displayContact = (_id) => {
    setChosenContactID(_id);
  };

  return (
    <Wrapper>
      <UserProfile />
      <AppSpace>
        <OuterLoadingWrapper>
          <LoadingWrapper>
            <Filter />

            <AddContactButton />
            {isLoading && (
              <SpinnerContainer>
                <RotatingLines
                  strokeColor="skyblue"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="28"
                  visible={true}
                />
              </SpinnerContainer>
            )}
          </LoadingWrapper>
        </OuterLoadingWrapper>
        <ContactsWrapper>
          <ContactList
            filteredContacts={filteredContacts}
            isLoading={isLoading}
            onContactClick={displayContact}
          />
          <ContactInfo chosenContactID={chosenContactID} />
        </ContactsWrapper>
      </AppSpace>
    </Wrapper>
  );
};

// export default ContactsPage;
