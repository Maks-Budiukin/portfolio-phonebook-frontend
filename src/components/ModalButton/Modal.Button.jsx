import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import { AddButton, EditButton, UserEditButton } from "./ModalButton.styled";

export const ModalButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      {props.fn === "addContact" && (
        <AddButton
          type="button"
          onClick={handleToggle}
        >
          <BsPlusCircle style={{ marginRight: "4px", fontSize: "24" }} />
          {isDesktop && "Add contact"}
        </AddButton>
      )}
      {props.fn === "editContact" && (
        <EditButton
          type="button"
          onClick={handleToggle}
        >
          <GrEdit style={{ marginRight: "4px" }} />
        </EditButton>
      )}
      {props.fn === "editUser" && (
        <UserEditButton
          type="button"
          onClick={handleToggle}
        >
          <GrEdit style={{ marginRight: "4px" }} />
          Edit info
        </UserEditButton>
      )}
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={props.fn}
            label={props.label}
            _id={props._id}
          />
        </Portal>
      )}
    </>
  );
};
