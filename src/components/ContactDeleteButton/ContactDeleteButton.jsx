import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteContactsThunk } from "redux/contacts/contacts.thunk";
import { DeleteButton } from "./ContactDeleteButton.styled";

export const ContactDeleteButton = (_id) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContactsThunk(_id._id));
  };

  return (
    <DeleteButton
      type="button"
      onClick={handleDeleteClick}
    >
      <RxCross1
        size={16}
        style={{ marginRight: "4px" }}
      />
    </DeleteButton>
  );
};
