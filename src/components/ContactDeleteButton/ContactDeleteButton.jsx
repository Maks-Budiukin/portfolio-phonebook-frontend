import styled from "styled-components";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "redux/contacts/contacts.thunk";

const DeleteButton = styled.button`
  --trans: all 0.25s ease 0s;
  /* background-color: #2f313a; */
  outline: none;
  border: none;
  background: linear-gradient(83deg, #ffdd40 0 97%, #fff0 calc(97% + 1px) 100%);
  color: #2f313a;
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
        <CiCircleRemove style={_id && { marginRight: "4px" }} />
        Delete contact
      </DeleteButton>
    </>
  );
};
