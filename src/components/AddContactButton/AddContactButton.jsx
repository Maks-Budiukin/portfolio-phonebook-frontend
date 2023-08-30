import { AddContactModal } from "components/ContactAddModal/ContactAddModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "redux/contacts/contacts.thunk";
import styled from "styled-components";
import { GrAddCircle } from "react-icons/gr";
import { BsPlusCircle } from "react-icons/bs";

const AddButton = styled.button`
  --trans: all 0.25s ease 0s;
  /* background-color: #2f313a; */
  outline: none;
  border: none;
  background: linear-gradient(83deg, #2f313a 0 97%, #fff0 calc(97% + 1px) 100%);
  color: #ffdd40;
  font-weight: bold;
  padding: 8px 16px;
  /* border: 2px solid #2f313a; */
  /* border-radius: 4px; */
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  transition: var(--trans);

  &:hover,
  &:focus {
    /* outline: none; */
    /* border: 1px solid skyblue; */
    transform: scale(1.03);
  }
`;

export const AddContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      <AddButton
        type="button"
        onClick={handleToggle}
      >
        <BsPlusCircle style={{ marginRight: "4px" }} />
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
