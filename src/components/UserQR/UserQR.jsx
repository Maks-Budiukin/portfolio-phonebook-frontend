import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QRWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  margin-left: -14px;
`;

export const UserQR = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <QRWrapper>
        <QRCode
          style={{
            height: "auto",
            maxWidth: "57%",
            width: "57%",
          }}
          value={`https://portfolio-phonebook-frontend.vercel.app/share/${user.shareLink}/${user._id}`}
          bgColor="#f8e8a1"
        />
      </QRWrapper>
    </>
  );
};
