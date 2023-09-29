import { ContactModal } from "components/ContactModal/ContactModal";
import { Portal } from "components/Portal/Portal";
import { useState } from "react";
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { UserModal } from "components/UserModal/UserModal";

import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const Burger = styled.button`
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
  display: flex;
  align-items: center;
  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const UserProfileModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      <Burger
        type="button"
        onClick={handleToggle}
      >
        <IconContext.Provider
          value={{
            color: "var(--yellow)",
            size: "36",
            style: { paddingRight: "16px" },
          }}
        >
          <RxHamburgerMenu />
        </IconContext.Provider>
      </Burger>
      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <UserModal onClose={handleToggle} />
        </Portal>
      )}
    </>
  );
};
