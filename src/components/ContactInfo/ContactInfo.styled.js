import styled from "styled-components";

export const Wrapper = styled.div`
  //тут работало
  position: fixed;
  right: 4vw;
  top: 70px;
  color: #fff;
  width: 26vw;
  height: 90vh;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--dark);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  p {
    height: 14px;
    margin-right: auto;
    margin-left: 8px;
  }
`;

export const AvatarThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  min-height: 38vh;
  /* background: linear-gradient(
    -128deg,
    var(--dark) 0% 32%,
    var(--yellow) 0% 100%
  ); */

  clip-path: polygon(0 0, 100% 2%, 100% 100%, 8% 100%);
  background-color: var(--yellow);
  padding-left: 12px;
  padding-top: 4px;
`;

export const UserAvatar = styled.div`
  width: 200px;
  height: 200px;
  img {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
`;
