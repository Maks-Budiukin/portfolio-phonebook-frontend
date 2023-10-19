import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 4px;
  width: 300px;

  border-top: 5px solid var(--dark);
  padding: 16px;

  input {
    display: flex;
    width: 210px;
    flex-direction: column;
    border: 2px solid var(--yellow);

    transition-property: border;
    transition-duration: 250ms;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid var(--dark);
    }
  }
`;

export const StyledFormMobile = styled.form`
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 4px;
  width: 80vw;

  border-top: 5px solid var(--dark);
  padding: 16px;

  font-weight: bold;

  label {
    display: block;
    margin: 8px 0px 8px 0px;
  }

  input {
    display: flex;
    width: 75vw;
    height: 5vh;
    flex-direction: column;

    padding: 2px 8px;

    border: 2px solid var(--yellow);
    border-radius: 8px;

    font-size: 24px;

    transition-property: border;
    transition-duration: 250ms;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid var(--dark);
    }
  }
`;

export const RegisterButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);

  color: var(--yellow);
  font-weight: bold;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

export const RegisterButtonMobile = styled.button`
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);

  color: var(--yellow);
  font-size: 24px;
  font-weight: bold;
  padding: 16px 28px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;
