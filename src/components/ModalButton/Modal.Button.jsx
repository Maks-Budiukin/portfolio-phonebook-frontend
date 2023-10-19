import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import {
  AddButton,
  EditButton,
  EditButtonMobile,
  UserEditButton,
  DeleteButton,
  DeleteButtonMobile,
} from "./ModalButton.styled";
import { RxCross1 } from "react-icons/rx";

export const ModalButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 689 });

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
      {props.fn === "editContact" && !isMobile && (
        <EditButton
          type="button"
          onClick={handleToggle}
        >
          <GrEdit style={{ margin: "4px" }} />
        </EditButton>
      )}
      {props.fn === "editContact" && isMobile && (
        <EditButtonMobile
          type="button"
          onClick={handleToggle}
        >
          Edit contact
        </EditButtonMobile>
      )}

      {props.fn === "deleteContact" && !isMobile && (
        <DeleteButton
          type="button"
          onClick={handleToggle}
        >
          <RxCross1
            size={16}
            style={{ fontWeight: "bold" }}
          />
        </DeleteButton>
      )}

      {props.fn === "deleteContact" && isMobile && (
        <DeleteButtonMobile
          type="button"
          onClick={handleToggle}
        >
          Delete contact
        </DeleteButtonMobile>
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
