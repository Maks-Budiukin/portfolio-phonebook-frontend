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

const ProfileContainer = styled.div`
  height: 100vw;
  min-width: 20vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2f313a;
  color: #fff;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid silver;
`;

const LogoutButton = styled.button`
  /* background-color: #2f313a; */
  outline: none;
  border: none;
  background: linear-gradient(85deg, #ffdd40 0 97%, #fff0 calc(97% + 1px) 100%);
  color: #2f313a;
  font-weight: bold;
  padding: 8px 16px;
  /* border: 2px solid #2f313a; */
  /* border-radius: 4px; */
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

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
  margin-bottom: 12px;
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
  padding: 12px;
`;

export const UserProfile = () => {
  const userInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <>
      <ProfileContainer>
        <h1>My info</h1>
        <UserProfileWrapper>
          <LogoutButton
            type="button"
            onClick={() => dispatch(logoutThunk())}
          >
            <BiLogOut style={{ marginRight: "4px" }} /> Log Out
          </LogoutButton>
          <UserEditButton _id={userInfo._id} />
          <p>Welcome, {userInfo.name}!</p>
        </UserProfileWrapper>

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
      </ProfileContainer>
    </>
  );
};
