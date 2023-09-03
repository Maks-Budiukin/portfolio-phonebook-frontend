import styled from "styled-components";
import { useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { AddContactButton } from "components/AddContactButton/AddContactButton";
import { Loader } from "components/Loader/Loader";

const OuterLoadingWrapper = styled.div`
  z-index: 3;
  position: fixed;
  left: 16vw;
  width: 79vw;
  height: 70px;
  background: linear-gradient(
    -104deg,
    #ffdd40 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

const LoadingWrapper = styled.div`
  position: absolute;
  left: 30px;
  /* top: 90px; */

  /* padding-top: 130px; */
  z-index: 2;
  background-color: #fff;
  width: 79vw;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #ffdd40;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ContactsAppBar = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading);

  return (
    <OuterLoadingWrapper>
      <LoadingWrapper>
        <Filter />

        <AddContactButton />
        {isLoading && <Loader />}
      </LoadingWrapper>
    </OuterLoadingWrapper>
  );
};
