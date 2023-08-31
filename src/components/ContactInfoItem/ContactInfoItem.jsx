import { IconContext } from "react-icons";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

const InfoData = styled.p`
  padding: 0;
  margin: 0;

  margin-left: 24px;
  display: flex;
  align-items: top;
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

const InfoDataA = styled.h2`
  color: #fff;
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
            color: "#fff",
            size: "24px",
            className: "global-class-name",
            style: { padding: "4px" },
          }}
        >
          {icon}
        </IconContext.Provider>

        {title ? title : data}
      </InfoDataLink>
      {/* <InfoDataA href={`${data}`}>{title ? title : data}</InfoDataA> */}
    </InfoItem>
  );
};
