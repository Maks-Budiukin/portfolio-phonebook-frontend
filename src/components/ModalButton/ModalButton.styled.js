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
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const EditButton = styled.button`
  outline: none;
  border: none;
  /* background: linear-gradient(
    -91deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  ); */
  background-color: var(--yellow);

  color: var(--dark);
  font-weight: bold;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  margin: 1px;
  border: 3px solid var(--dark);
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.13);
  }
`;

export const EditButtonMobile = styled.button`
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);

  color: var(--yellow);
  font-weight: bold;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-right: -2px;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
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
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const DeleteButton = styled.button`
  /* outline: none; */
  /* border: none; */
  /* background: linear-gradient(
    -91deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  ); */
  background-color: var(--dark);

  color: var(--yellow);
  font-weight: bold;
  padding: 6px 14px;
  display: flex;
  align-items: center;
  /* margin: 2px; */
  border: 3px solid var(--dark);
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.13);
  }
`;

export const DeleteButtonMobile = styled.button`
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(4% 0, 100% 0, 100% 100%, 0% 100%);

  color: var(--yellow);
  font-weight: bold;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: -2px;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;
