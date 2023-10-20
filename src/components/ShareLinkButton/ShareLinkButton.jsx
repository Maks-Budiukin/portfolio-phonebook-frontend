import { useEffect, useState } from "react";
import { Portal } from "components/Portal/Portal";
import { BiSolidShare } from "react-icons/bi";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
import {
  ModalWindow,
  ShareButton,
  ShareLinkText,
  ShareLinkTextCopied,
  QRThumb,
} from "./ShareLinkButton.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PiCopySimple } from "react-icons/pi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { toast } from "react-toastify";

export const ShareLinkButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowBox, setIsShowBox] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  const user = useSelector((state) => state.auth.user);

  const handleToggle = () => setIsModalOpen((pS) => !pS);

  const onLinkClick = () => {
    setIsCopied(true);
    toast.warn("Link copied to clipboard!");
  };

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
          <ModalWindow
            className={`modal block ${isShowBox ? " block-show" : ""}`}
          >
            <QRThumb>
              <QRCode
                value={`https://portfolio-phonebook-frontend.vercel.app/share/${user.shareLink}/${user._id}`}
              />
            </QRThumb>
            <CopyToClipboard
              text={`https://portfolio-phonebook-frontend.vercel.app/share/${user.shareLink}/${user._id}`}
              onCopy={onLinkClick}
            >
              {isCopied ? (
                <ShareLinkTextCopied>
                  Or click HERE to copy and share the link!{" "}
                  <IoCheckmarkDoneCircleSharp />
                </ShareLinkTextCopied>
              ) : (
                <ShareLinkText>
                  Or click HERE to copy and share the link! <PiCopySimple />
                </ShareLinkText>
              )}
            </CopyToClipboard>
          </ModalWindow>
        </Portal>
      )}
    </>
  );
};
