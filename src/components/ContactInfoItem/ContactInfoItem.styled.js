import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

export const InfoDataLink = styled(Link)`
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
