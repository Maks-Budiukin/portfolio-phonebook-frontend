import styled from "styled-components";

export const Wrapper = styled.div`
  //тут работало
  position: fixed;
  right: 4vw;
  top: 70px;
  color: #fff;

  width: 32vw;
  min-width: 220px;
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
  width: 26vw;
  min-width: 190px;

  clip-path: polygon(0 0, 100% 2%, 100% 100%, 8% 100%);
  background-color: var(--yellow);
  padding-left: 12px;
  padding-top: 4px;
`;

export const UserAvatar = styled.div`
  width: 23vw;
  min-width: 170px;
  max-width: 200px;

  height: 200px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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
