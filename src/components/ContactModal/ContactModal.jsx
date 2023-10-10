import { MainForm } from "components/MainForm/MainForm";
import { useEffect, useState } from "react";
import { ModalWindow } from "./ContactModal.styled";
import { useMediaQuery } from "react-responsive";
import { MainFormMobile } from "components/MainForm/MainFormMobile";

export const ContactModal = (props) => {
  const [isShowBox, setIsShowBox] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 689 });

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, []);

  return (
    <ModalWindow className={`modal block ${isShowBox ? " block-show" : ""}`}>
      {isMobile ? (
        <MainFormMobile
          onSubmitClose={props.onClose}
          fn={props.fn}
          _id={props._id}
          label={props.label}
        />
      ) : (
        <MainForm
          onSubmitClose={props.onClose}
          fn={props.fn}
          _id={props._id}
          label={props.label}
        />
      )}
    </ModalWindow>
  );
};
