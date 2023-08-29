import { Filter } from "components/Filter/Filter";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "redux/contacts/contacts.thunk";
import styled from "styled-components";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { ContactInfo } from "components/ContactInfo/ContactInfo";

const StyledList = styled.ul`
  /* position: sticky; */
  /* top: 70px; */
  padding: 0;
  padding-top: 30px;
  list-style: none;
  width: 50vw;

  li {
    display: flex;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    font-weight: bold;
  }

  button {
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }

  li span {
    color: black;
    display: inline-block;
    margin-left: auto;
    margin-right: 8px;
    font-weight: normal;
  }
`;

const LoadingWrapper = styled.div`
  /* position: fixed; */
  /* top: 16;
  left: 16; */
  background-color: tomato;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
  width: 70vw;
`;

const ContactsListHeader = styled.h2`
  /* top: 70px; */
`;

export const ContactList = ({
  filteredContacts,
  isLoading,
  onContactClick,
}) => {
  // const contacts = useSelector(state => state.contacts.items);
  // const [cont, setCont] = useState(contacts);

  // const filter = useSelector(state => state.filter);
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // useEffect(() => {
  //   isLoggedIn && dispatch(fetchContactsThunk());
  // }, [dispatch, isLoggedIn, cont]);

  // const normalizedFilter = filter.toLowerCase().trim();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  // const [chosenContact, setChosenContact] = useState(null);

  // const handleContactClick = (id) => {
  //   const currContact = filteredContacts.find((contact) => contact._id === id);
  //   console.log(currContact);
  //   setChosenContact(currContact);
  // };

  return (
    <Wrapper>
      <div>
        <StyledList>
          {filteredContacts.map((item) => {
            return (
              <ContactListItem
                key={item._id}
                name={item.name}
                number={item.number}
                id={item._id}
                onClick={() => onContactClick(item._id)}
              />
            );
          })}
        </StyledList>
      </div>
      {/* <ContactInfo
        chosenContact={chosenContact}
        filteredContacts={filteredContacts}
      /> */}
    </Wrapper>
  );
};
