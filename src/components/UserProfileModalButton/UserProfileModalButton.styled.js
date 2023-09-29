import styled from "styled-components";

export const Burger = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    83deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
    color: var(--yellow);
  }
`;
