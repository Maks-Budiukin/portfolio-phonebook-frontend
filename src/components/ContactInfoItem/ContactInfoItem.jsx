import { IconContext } from "react-icons";

import { useMediaQuery } from "react-responsive";
import { InfoDataLink, InfoItem } from "./ContactInfoItem.styled";

export const ContactInfoItem = ({ data, icon, title }) => {
  const isMobile = useMediaQuery({ maxWidth: 689 });

  return (
    <InfoItem>
      <InfoDataLink
        to={data}
        target="_blank"
        style={{ color: isMobile && "var(--dark)" }}
      >
        <IconContext.Provider
          value={{
            // color: "#fff",
            size: "24px",
            className: "global-class-name",
            style: { padding: "4px" },
          }}
        >
          {icon}
        </IconContext.Provider>

        {title ? title : data}
      </InfoDataLink>
    </InfoItem>
  );
};
