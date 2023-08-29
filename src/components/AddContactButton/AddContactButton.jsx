import { AddContactModal } from "components/ContactAddModal/ContactAddModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "redux/contacts/contacts.thunk";
import styled from "styled-components";

const AddButton = styled.button`
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid silver;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid skyblue;
  }
`;

export const AddContactButton = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleToggle = () => setisModalOpen((pS) => !pS);

  return (
    <>
      <AddButton
        type="button"
        onClick={handleToggle}
      >
        Add contact
      </AddButton>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <AddContactModal onClose={handleToggle} />
        </Portal>
      )}
    </>
  );
};
