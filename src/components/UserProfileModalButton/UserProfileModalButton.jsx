import { Portal } from "components/Portal/Portal";
import { useState } from "react";

import { UserModal } from "components/UserModal/UserModal";

import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { Burger } from "./UserProfileModalButton.styled";

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
