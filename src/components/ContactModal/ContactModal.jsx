import { MainForm } from "components/MainForm/MainForm";
import { useEffect, useState } from "react";
import { ModalWindow } from "./ContactModal.styled";

export const ContactModal = (props) => {
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  return (
    <ModalWindow className={`modal block ${isShowBox ? " block-show" : ""}`}>
      <MainForm
        onSubmitClose={props.onClose}
        fn={props.fn}
        _id={props._id}
        label={props.label}
      />
    </ModalWindow>
  );
};
