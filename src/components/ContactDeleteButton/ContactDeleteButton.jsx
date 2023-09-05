import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "redux/contacts/contacts.thunk";

const DeleteButton = styled.button`
  --trans: all 0.25s ease 0s;
  /* background-color: #2f313a; */
  outline: none;
  border: none;
  background: linear-gradient(91deg, #ffdd40 0 97%, #fff0 calc(97% + 1px) 100%);
  color: #2f313a;
  font-weight: bold;
  padding: 4px 12px;
  /* border: 2px solid #2f313a; */
  /* border-radius: 4px; */
  display: flex;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
  border: 4px solid #2f313a;
  transition: var(--trans);
  margin-left: -4px;

  &:hover,
  &:focus {
    /* outline: none; */
    /* border: 1px solid skyblue; */
    transform: scale(1.13);
  }
`;

export const ContactDeleteButton = (_id) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContactsThunk(_id._id));
  };

  return (
    <>
      <DeleteButton
        type="button"
        onClick={handleDeleteClick}
      >
        <RxCross1
          size={16}
          style={{ marginRight: "4px" }}
        />
      </DeleteButton>
    </>
  );
};
