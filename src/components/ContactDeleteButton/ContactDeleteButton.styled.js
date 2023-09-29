import styled from "styled-components";

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    91deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--dark);

  font-weight: bold;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  border: 4px solid var(--dark);
  transition: var(--trans);
  margin-left: -4px;

  &:hover,
  &:focus {
    transform: scale(1.13);
  }
`;
