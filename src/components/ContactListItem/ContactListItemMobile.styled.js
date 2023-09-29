import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  z-index: 2;
  margin: 1.5em 0 0.5em;
  padding: 0.73em;
  background: linear-gradient(
    83deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
  position: relative;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: scale(0.84);
  transition-property: transform height;
  transition-duration: 400ms;

  &.block2 {
    max-height: 300px;
    transition: max-height 1s ease-out;
  }

  &.block2-show {
    max-height: 1000px;
    transition: max-height 1s ease-in;
  }

  &:nth-of-type(even) {
    background: linear-gradient(
      -83deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
    );
  }

  &:hover {
    transform: scale(0.88);
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
  left: 60px;
  font-size: 22px;
  padding: 4px;

  background: var(--dark);
  color: var(--yellow);

  background: linear-gradient(
    106deg,
    var(--dark) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;
