import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/auth/auth.thunk";
import { BiLogOut } from "react-icons/bi";

import styled from "styled-components";
import { UserProfileItem } from "components/UserProfileItem/UserProfileItem";

import { TfiEmail } from "react-icons/tfi";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaLinkedin, FaViber, FaPhoneSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandBitbucket } from "react-icons/tb";

import {
  handleTelegramURL,
  handleTelegramLink,
  handleTwitterURL,
  handleTwitterLink,
  handleInstagramURL,
  handleInstagramLink,
  handleGithubURL,
  handleGithubLink,
  handleBitbucketURL,
  handleBitbucketLink,
  handleFacebookURL,
  handleFacebookLink,
  handleLinkedInURL,
} from "../ContactInfo/handleContactInput";
import { UserEditButton } from "components/UserEditButton/UserEditButton";
import { ShareLinkButton } from "components/ShareLinkButton/ShareLinkButton";
import { UserQR } from "components/UserQR/UserQR";

const ProfileContainer = styled.div`
  height: 100vh;
  width: 20vw;
  position: fixed;
  overflow-y: scroll;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 45vw;
  background-color: #2f313a;
  color: #fff;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 16px;
  border-right: 1px solid silver;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContactPhotoThumb = styled.div`
  --yellow: #ffdd40;
  --dark: #2f313a;
  --deg: -58deg;
  --trans: all 0.4s ease 0s;

  width: 15vmin;
  height: 15vmin;
  float: left;
  /* margin-right: 1.25em; */
  background: linear-gradient(
    var(--deg),
    var(--dark) 0 62%,
    var(--yellow) 0% 100%
  );
  /* transform: rotate(-4deg); */
  transition: var(--trans);
  border-radius: 0.25em;
  overflow: hidden;
  /* margin-left: -3em; */
  padding: 0.5em;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    /* filter: grayscale(1); */
    background: var(--dark);
  }
`;

const LogoutButton = styled.button`
  /* background-color: #2f313a; */
  outline: none;
  border: none;
  background: linear-gradient(
    -95deg,
    #ffdd40 0 97%,
    #fff0 calc(97% + 1px) 100%
  );

  color: #2f313a;
  font-weight: bold;
  padding: 8px 16px;
  /* border: 2px solid #2f313a; */
  /* border-radius: 4px; */
  margin-left: auto;
  display: flex;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */

  transition-property: scale;
  transition-duration: 250;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    /* outline: none; */
    /* border: 1px solid skyblue; */
    transform: scale(1.03);
  }
`;

const UserProfileWrapper = styled.div`
  /* display: flex;
  justify-content: space-between; */
  /* height: 190px; */
  /* border-right: 2px solid #ffdd40; */
  /* border-bottom: 2px solid #ffdd40; */
  border-bottom: 2px solid #ffdd40;
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

const UserInfoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 10vw;
  margin-top: 8px;
  margin-right: auto;
  /* margin-left: auto; */

  display: flex;
  flex-wrap: wrap;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* padding: 12px 4px; */
`;

const ButtonContainer = styled.div``;

export const UserProfile = () => {
  const userInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <>
      <ProfileContainer>
        <h1>My info</h1>
        <UserProfileWrapper>
          <TopContainer>
            <ContactPhotoThumb className="rotate">
              <img src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg?format=1500w"></img>
            </ContactPhotoThumb>
            <ButtonContainer>
              <LogoutButton
                type="button"
                onClick={() => dispatch(logoutThunk())}
              >
                <BiLogOut style={{ marginRight: "4px" }} /> Log Out
              </LogoutButton>
              <UserEditButton _id={userInfo._id} />
            </ButtonContainer>
          </TopContainer>
          {/* <p>Welcome, {userInfo.name}!</p> */}
          <UserInfoList>
            {userInfo.number && (
              <UserProfileItem
                data={`callto:${userInfo.number}`}
                icon={<FaPhoneSquare />}
                title={userInfo.number}
              />
            )}

            {userInfo.email && (
              <UserProfileItem
                data={`mailto:${userInfo.email}`}
                icon={<TfiEmail />}
                title={userInfo.email}
              />
            )}
            {userInfo.telegram && (
              <UserProfileItem
                data={handleTelegramLink(userInfo.telegram)}
                icon={<LiaTelegramPlane />}
                title={handleTelegramURL(userInfo.telegram)}
              />
            )}
            {userInfo.whatsapp && (
              <UserProfileItem
                data={`https://wa.me/${userInfo.whatsapp}`}
                icon={<BsWhatsapp />}
                title={userInfo.whatsapp}
              />
            )}
            {userInfo.viber && (
              <UserProfileItem
                data={`viber://chat?number=%2B${userInfo.viber}`}
                icon={<FaViber />}
                title={userInfo.viber}
              />
            )}
            {userInfo.instagram && (
              <UserProfileItem
                data={handleInstagramLink(userInfo.instagram)}
                icon={<SiInstagram />}
                title={handleInstagramURL(userInfo.instagram)}
              />
            )}
            {userInfo.facebook && (
              <UserProfileItem
                data={handleFacebookLink(userInfo.facebook)}
                icon={<BsFacebook />}
                title={handleFacebookURL(userInfo.facebook)}
              />
            )}
            {userInfo.linkedin && (
              <UserProfileItem
                data={userInfo.linkedin}
                icon={<FaLinkedin />}
                title={handleLinkedInURL(userInfo.linkedin)}
              />
            )}
            {userInfo.twitter && (
              <UserProfileItem
                data={handleTwitterLink(userInfo.twitter)}
                icon={<SlSocialTwitter />}
                title={handleTwitterURL(userInfo.twitter)}
              />
            )}
            {userInfo.github && (
              <UserProfileItem
                data={handleGithubLink(userInfo.github)}
                icon={<RxGithubLogo />}
                title={handleGithubURL(userInfo.github)}
              />
            )}

            {userInfo.bitbucket && (
              <UserProfileItem
                data={handleBitbucketLink(userInfo.bitbucket)}
                icon={<TbBrandBitbucket />}
                title={handleBitbucketURL(userInfo.bitbucket)}
              />
            )}
          </UserInfoList>
        </UserProfileWrapper>

        <ShareLinkButton />
        <UserQR />
      </ProfileContainer>
    </>
  );
};
