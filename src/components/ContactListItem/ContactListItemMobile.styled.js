import styled from "styled-components";

export const ContactItem = styled.li`
  /* display: grid; */
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  /* font-weight: bold; */

  z-index: 2;
  /* margin: 1.5 0 0.5em; */
  margin: 10px 0;
  padding: 16px;
  /* background: linear-gradient(
    85deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  ); */
  background-color: var(--yellow);
  position: relative;
  list-style: none;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  transform: scale(0.84);
  /* height: "auto"; */

  color: #fff;
  /* color: var(--yellow); */
  /* display: grid;
  grid-template-rows: 0fr;
  transition-property: grid-template-rows;
  transition-duration: 400ms;
  transition-timing-function: linear; */
  .block {
    display: grid;
    grid-template-rows: 0fr;
    transition-property: grid-template-rows;
    transition-duration: 400ms;
    transition-timing-function: linear;
  }

  .block-show {
    /* max-height: 1000px; */
    grid-template-rows: 1fr;
    transition-property: grid-template-rows;
    transition-duration: 400ms;
    transition-timing-function: linear;
  }

  /* &:nth-of-type(even) {
    background: linear-gradient(
      -83deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );
  } */

  &:hover,
  &:focus {
    /* transform: scale(0.88); */
    cursor: pointer;
    img {
      filter: grayscale(0);
    }
  }

  .rotate {
    transform: rotate(-4deg);
  }

  &:nth-of-type(even) {
    .rotate {
      transform: rotate(2deg);
    }
  }
`;

export const ContactPhotoThumb = styled.div`
  min-width: 12vmin;
  height: 12vmin;
  float: left;
  margin-right: 1.25em;
  background: linear-gradient(-75deg, var(--dark) 0 70%, var(--yellow) 0% 100%);

  transition: var(--trans);
  border-radius: 0.25em;
  overflow: hidden;
  margin-left: -3em;
  padding: 0.5em;

  &:nth-of-type(even) {
    transform: rotate(14deg);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    filter: grayscale(1);
    background: var(--dark);
    transition-property: filter;
    transition-duration: 400ms;
  }
`;

export const ContactName = styled.div`
  position: absolute;
  top: -13px;
  left: 48px;
  font-size: 22px;
  padding: 8px;

  background: var(--dark);
  /* color: var(--yellow); */

  background: linear-gradient(
    106deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

export const ContactNameInline = styled.div`
  /* width: 100%; */
  padding: 4px;
  /* margin-right: auto; */
  color: var(--yellow);
  font-weight: bold;
  /* border-bottom: 2px solid var(--yellow); */
  /* text-decoration: underline; */
`;

export const ContactNumber = styled.div`
  /* position: absolute;
  top: -33px;
  left: 60px; */
  /* width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  font-size: 22px;
  padding: 4px;
  margin: -28px -36px 12px 3rem;

  background: var(--dark);
  /* color: var(--yellow); */

  background: linear-gradient(
    97deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;
