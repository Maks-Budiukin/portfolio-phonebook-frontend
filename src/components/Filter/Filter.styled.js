import styled from "styled-components";

export const StyledFilter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 24vw;
  margin-left: 48px;
  label {
    position: absolute;
    top: 8px;
    right: 0;
    font-weight: 500;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    height: 26px;
    border: 2px solid var(--dark);
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid var(--dark);
    }
  }
`;
