import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/auth/auth.thunk";

import { UserProfileItem } from "components/UserProfileItem/UserProfileItem";

import { BiLogOut } from "react-icons/bi";
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
import { ShareLinkButton } from "components/ShareLinkButton/ShareLinkButton";
import { UserQR } from "components/UserQR/UserQR";

import userDummy from "images/user-dummy28.jpg";
import { ModalButton } from "components/ModalButton/Modal.Button";
import {
  ButtonContainer,
  ContactPhotoThumb,
  LogoutButton,
  ProfileContainer,
  TopContainer,
  UserInfoList,
  UserProfileWrapper,
} from "./UserProfileTablet.styled";

export const UserProfileTablet = () => {
  const userInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
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
            <ModalButton
              _id={userInfo._id}
              label={"Edit info"}
              fn={"editUser"}
            />
            <ShareLinkButton />
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

      <UserQR />
    </ProfileContainer>
  );
};
