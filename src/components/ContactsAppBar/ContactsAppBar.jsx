import { useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { ModalButton } from "components/ModalButton/Modal.Button";
import { LoadingWrapper, OuterLoadingWrapper } from "./ContactsAppBar.styled";

export const ContactsAppBar = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading);

  return (
    <OuterLoadingWrapper>
      <LoadingWrapper>
        <Filter />

        <ModalButton
          fn={"addContact"}
          label={"Add contact"}
        />
        {isLoading && <Loader />}
      </LoadingWrapper>
    </OuterLoadingWrapper>
  );
};
