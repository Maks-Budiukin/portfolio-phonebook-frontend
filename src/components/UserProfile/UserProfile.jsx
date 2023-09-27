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

import userDummy from "images/user-dummy28.jpg";

const ProfileContainer = styled.div`
  height: 100vh;
  width: 20vw;
  position: fixed;
  overflow-y: scroll;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 45vw;
  background-color: var(--dark);
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
  width: 15vmin;
  height: 15vmin;
  float: left;
  background: linear-gradient(
    var(--deg),
    var(--dark) 0 62%,
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

const LogoutButton = styled.button`
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

  transition-property: scale;
  transition-duration: 250;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

const UserProfileWrapper = styled.div`
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

const UserInfoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 10vw;
  margin-top: 8px;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
              <img
                src={userInfo.avatar ? userInfo.avatar : userDummy}
                alt="Contact avatar"
              ></img>
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
