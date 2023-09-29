import { UserProfileTablet } from "components/UserProfile/UserProfileTablet";
import { useEffect, useState } from "react";
import { ModalWindow } from "./UserModal.styled";

export const UserModal = () => {
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  return (
    <ModalWindow className={`modal block ${isShowBox ? " block-show" : ""}`}>
      <UserProfileTablet />
    </ModalWindow>
  );
};
