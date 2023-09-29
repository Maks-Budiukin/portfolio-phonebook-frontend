import { IconContext } from "react-icons";
import { InfoDataLink, InfoItem } from "./UserProfileItem.styled";

export const UserProfileItem = ({ data, icon, title }) => {
  return (
    <InfoItem>
      <InfoDataLink
        to={data}
        target="_blank"
      >
        <IconContext.Provider
          value={{
            size: "24px",
            className: "global-class-name",
            style: { padding: "4px" },
          }}
        >
          {icon}
        </IconContext.Provider>
      </InfoDataLink>
    </InfoItem>
  );
};
