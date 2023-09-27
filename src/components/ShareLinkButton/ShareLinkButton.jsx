import { useState } from "react";
import styled from "styled-components";
import { Portal } from "components/Portal/Portal";
import { BiSolidShare } from "react-icons/bi";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";

const ShareButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    94deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );

  color: var(--dark);
  font-weight: bold;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

const ModalWindow = styled.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

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
