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
    -91deg,
    #ffdd40 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: #2f313a;
  font-weight: bold;
  padding: 4px 12px;
  /* border: 2px solid #2f313a; */
  /* border-radius: 4px; */
  display: flex;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
  margin: 2px;
  border: 3px solid #2f313a;

  transition: var(--trans);

  &:hover,
  &:focus {
    /* outline: none; */
    /* border: 1px solid skyblue; */
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
          />
        </Portal>
      )}
    </>
  );
};
