import { UserProfileModalButton } from "components/UserProfileModalButton/UserProfileModalButton";
import {
  BurgerButtonContainer,
  ProfileContainer,
} from "./UserProfileBarTablet.styled";

export const UserProfileBarTablet = () => {
  return (
    <ProfileContainer>
      <BurgerButtonContainer>
        <UserProfileModalButton />
      </BurgerButtonContainer>
    </ProfileContainer>
  );
};
