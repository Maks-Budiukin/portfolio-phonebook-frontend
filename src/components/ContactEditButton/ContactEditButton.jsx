import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import styled from "styled-components";
import { GrEdit } from "react-icons/gr";

const EditButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    -91deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );

  color: var(--dark);
  font-weight: bold;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  margin: 2px;
  border: 3px solid var(--dark);

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.13);
  }
`;

export const EditContactButton = (_id) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      <EditButton
        type="button"
        onClick={handleToggle}
      >
        <GrEdit style={_id && { marginRight: "4px" }} />
      </EditButton>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={"edit"}
            _id={_id}
            label={"Edit contact"}
          />
        </Portal>
      )}
    </>
  );
};
