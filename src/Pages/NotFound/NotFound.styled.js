import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  position: relative;
`;

export const NotFoundImage = styled.img`
  width: 50vw;
  object-fit: contain;
`;

export const NotFoundImageMobile = styled.img`
  width: 80vw;
  object-fit: contain;
`;

export const NotFoundSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow);
`;

export const NotFoundTextDesktop = styled.p`
  width: 70%;
  position: absolute;
  top: 20%;
  left: 13%;
  font-size: 36px;
  font-weight: bold;
  color: var(--dark);
`;

export const NotFoundTextTablet = styled.p`
  width: 50%;
  position: absolute;
  top: 20%;
  left: 13%;
  font-size: 32px;
  font-weight: bold;
  color: var(--dark);
`;

export const NotFoundTextMobile = styled.p`
  width: 55%;
  position: absolute;
  top: 15%;
  left: 10%;
  font-size: 24px;
  font-weight: bold;
  color: var(--dark);
`;

export const GoBackButton = styled(NavLink)`
  position: absolute;
  top: 75%;
  left: 13%;
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 5% 100%);

  color: var(--yellow);
  font-weight: bold;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: -2px;
  cursor: pointer;
  text-decoration: none;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;
