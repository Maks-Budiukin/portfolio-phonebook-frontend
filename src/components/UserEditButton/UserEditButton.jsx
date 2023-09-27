import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import styled from "styled-components";
import { GrEdit } from "react-icons/gr";

const EditButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    -96deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--dark);
  font-weight: bold;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin: 4px;
  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const UserEditButton = (_id) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      <EditButton
        type="button"
        onClick={handleToggle}
      >
        <GrEdit style={_id && { marginRight: "4px" }} />
        Edit info
      </EditButton>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={"userEdit"}
            _id={_id}
            label={"Edit User"}
          />
        </Portal>
      )}
    </>
  );
};
