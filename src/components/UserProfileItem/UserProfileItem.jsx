import { IconContext } from "react-icons";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

const InfoDataLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  &:visited {
    text-decoration: none;
    color: "#fff";
  }
`;

export const UserProfileItem = ({ data, icon, title }) => {
  return (
    <InfoItem>
      <InfoDataLink
        to={data}
        target="_blank"
      >
        <IconContext.Provider
          value={{
            color: "#fff",
            size: "24px",
            className: "global-class-name",
            style: { padding: "4px" },
          }}
        >
          {icon}
        </IconContext.Provider>

        {/* {title ? title : data} */}
      </InfoDataLink>
    </InfoItem>
  );
};
