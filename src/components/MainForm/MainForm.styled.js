import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
`;

export const TextPartWrapper = styled.div``;

export const FunctionalPartWrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  padding: 2px;

  label {
    color: #fff;
  }

  input {
    display: flex;
    width: 210px;
    padding: 4px;
    border: 1px solid var(--dark);
    border-radius: 4px;
    color: var(--dark);
    font-weight: bold;
    background-color: var(--yellow);

    transition-property: border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid var(--yellow);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);

  color: var(--dark);
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

export const CancelButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--yellow);
  clip-path: polygon(6% 0, 100% 0, 100% 100%, 0% 100%);

  color: var(--dark);
  font-weight: bold;
  padding: 16px 24px;
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
