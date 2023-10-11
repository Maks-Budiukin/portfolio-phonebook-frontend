import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 100vh;
  max-width: 70vw;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  background-color: var(--dark);
  color: #fff;
  overflow-x: hidden;
  padding-top: 30px;
  padding-left: 16px;
  padding-bottom: 40px;

  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.5);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactPhotoThumb = styled.div`
  width: 36vmin;
  height: 36vmin;
  float: left;
  background: linear-gradient(
    -61deg,
    var(--dark) 0% 62%,
    var(--yellow) 0% 100%
  );
  transition: var(--trans);
  border-radius: 0.25em;
  overflow: hidden;
  padding: 0.5em;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    background: var(--dark);
  }
`;

export const LogoutButton = styled.button`
  outline: none;
  border: none;
  background: linear-gradient(
    -95deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );

  color: var(--dark);
  font-weight: bold;
  padding: 8px 16px;
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition-property: scale;
  transition-duration: 250;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const UserProfileWrapper = styled.div`
  border-bottom: 2px solid var(--yellow);
  border-radius: 8px;
  margin-bottom: 24px;
  margin-right: 16px;
  h1 {
    margin-top: 4px;
    margin-bottom: 14px;
  }

  p {
    font-style: italic;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const UserInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div``;
