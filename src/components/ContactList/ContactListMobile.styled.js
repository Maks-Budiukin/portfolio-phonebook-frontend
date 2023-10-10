import styled from "styled-components";

export const StyledList = styled.ul`
  padding: 0;
  padding-top: 30px;
  margin-left: -42px;
  list-style: none;
  width: 95vw;

  li {
    /* display: flex; */
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    /* margin: 4px; */
    /* font-weight: bold; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 45px;
`;
