import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "redux/contacts/contacts.thunk";

const DeleteButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    91deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--dark);

  font-weight: bold;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  border: 4px solid var(--dark);
  transition: var(--trans);
  margin-left: -4px;

  &:hover,
  &:focus {
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
