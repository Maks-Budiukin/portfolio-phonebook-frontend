import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
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

  transition-property: color;
  transition-duration: 250ms;

  &:visited {
    text-decoration: none;
    color: "#fff";
  }
  &:hover {
    color: var(--yellow);
  }
`;

export const ContactInfoItem = ({ data, icon, title }) => {
  return (
    <InfoItem>
      <InfoDataLink
        to={data}
        target="_blank"
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
