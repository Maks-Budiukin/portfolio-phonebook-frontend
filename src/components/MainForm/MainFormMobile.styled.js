import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 4px;
  width: 300px;

  input {
    display: flex;
    width: 210px;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  input {
    display: flex;
    width: 210px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  }
`;
