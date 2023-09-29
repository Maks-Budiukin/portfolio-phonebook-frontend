import styled from "styled-components";

export const AddButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    83deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--yellow);
  font-weight: bold;
  padding: 8px 16px;
  margin-right: 26px;
  display: flex;
  align-items: center;
  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const EditButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    -91deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );

  color: var(--dark);
  font-weight: bold;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  margin: 2px;
  border: 3px solid var(--dark);

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.13);
  }
`;

export const UserEditButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    -96deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  color: var(--dark);
  font-weight: bold;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin: 4px;
  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
