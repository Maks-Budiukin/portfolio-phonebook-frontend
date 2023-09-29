import { useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { ModalButton } from "components/ModalButton/Modal.Button";
import { LoadingWrapper, ShadowWrapper } from "./ContactsAppBarTablet.styled";

export const ContactsAppBarTablet = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading);

  return (
    <ShadowWrapper>
      <LoadingWrapper>
        <Filter />

        <ModalButton
          fn={"addContact"}
          label={"Add contact"}
        />
        {isLoading && <Loader />}
      </LoadingWrapper>
    </ShadowWrapper>
  );
};
