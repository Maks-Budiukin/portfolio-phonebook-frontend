import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

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
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1279 });
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
