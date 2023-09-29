import { useState } from "react";
import { Portal } from "components/Portal/Portal";
import { BiSolidShare } from "react-icons/bi";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
import { ModalWindow, ShareButton } from "./ShareLinkButton.styled";

export const ShareLinkButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  return (
    <>
      <ShareButton
        type="button"
        onClick={handleToggle}
      >
        Share
        <BiSolidShare style={{ marginRight: "4px", rotate: "35deg" }} />
      </ShareButton>

      {isModalOpen && (
        <Portal onClose={handleToggle}>
          <ModalWindow>
            <p>
              <QRCode
                value={`https://portfolio-phonebook-frontend.vercel.app/share/${user.shareLink}/${user._id}`}
              />
            </p>
          </ModalWindow>
        </Portal>
      )}
    </>
  );
};
