import styled from "styled-components";
import { useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { AddContactButton } from "components/AddContactButton/AddContactButton";
import { Loader } from "components/Loader/Loader";

const OuterLoadingWrapper = styled.div`
  z-index: 3;
  position: fixed;
  left: 7vw;
  width: 90vw;
  height: 70px;
  background: linear-gradient(
    -104deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  );
`;

const ShadowWrapper = styled.div`
  position: fixed;
  left: 6.5vw;
  z-index: 3;
  width: 89vw;
  filter: drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.2));
  /* filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)); */
`;

const LoadingWrapper = styled.div`
  background-color: #fff;

  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--yellow);

  /* background: linear-gradient(
    -104deg,
    var(--yellow) 0 97%,
    #fff0 calc(97% + 1px) 100%
  ); */

  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
`;

export const ContactsAppBarTablet = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading);

  return (
    // <OuterLoadingWrapper>
    <ShadowWrapper>
      <LoadingWrapper>
        <Filter />

        <AddContactButton />
        {isLoading && <Loader />}
      </LoadingWrapper>
    </ShadowWrapper>
    // </OuterLoadingWrapper>
  );
};
