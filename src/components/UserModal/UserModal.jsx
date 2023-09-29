import { UserProfile } from "components/UserProfile/UserProfile";
import { UserProfileTablet } from "components/UserProfile/UserProfileTablet";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ModalWindow = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  /* background-color: #fff; */

  /* padding: 68px 48px; */
  /* margin: 32px; */

  &.block {
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.block-show {
    transform: translateX(0);
  }
`;

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
