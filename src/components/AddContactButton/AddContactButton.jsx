import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const AddButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    83deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--yellow);
  font-weight: bold;
  padding: 8px 16px;
  margin-right: 26px;
  display: flex;
  align-items: center;
  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const AddContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 689 });

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      <AddButton
        type="button"
        onClick={handleToggle}
      >
        <BsPlusCircle style={{ marginRight: "4px", fontSize: "24" }} />
        {isDesktop && "Add contact"}
      </AddButton>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ContactModal
            onClose={handleToggle}
            fn={"add"}
            label={"Add contact"}
          />
        </Portal>
      )}
    </>
  );
};
