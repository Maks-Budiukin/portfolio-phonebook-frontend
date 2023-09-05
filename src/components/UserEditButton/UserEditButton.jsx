import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import styled from "styled-components";
import { GrEdit } from "react-icons/gr";

const EditButton = styled.button`
  --trans: all 0.25s ease 0s;
  /* background-color: #2f313a; */
  outline: none;
  border: none;
  background: linear-gradient(
    -97deg,
    #ffdd40 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: #2f313a;
  font-weight: bold;
  padding: 8px 16px;
  /* border: 2px solid #2f313a; */
  /* border-radius: 4px; */
  display: flex;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
  margin: 4px;
  transition: var(--trans);

  &:hover,
  &:focus {
    /* outline: none; */
    /* border: 1px solid skyblue; */
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
        Edit my info
      </EditButton>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={"userEdit"}
            _id={_id}
          />
        </Portal>
      )}
    </>
  );
};
