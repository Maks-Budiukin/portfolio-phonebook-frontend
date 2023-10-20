import { nanoid } from "nanoid";

import { useState } from "react";
import { loginThunk, regThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";
import {
  RegisterButton,
  RegisterButtonMobile,
  StyledForm,
  StyledFormMobile,
} from "./RegisterForm.styled";
import { useMediaQuery } from "react-responsive";

const RegisterForm = () => {
  const emailInpudId = nanoid();
  const passwordInpudId = nanoid();

  const [authEmail, setAuthEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 689 });

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "email":
        setAuthEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await dispatch(regThunk({ authEmail, password }));
    await dispatch(loginThunk({ authEmail, password }));
    setAuthEmail("");
    setPassword("");
  };

  return (
    <>
      {!isMobile && (
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor={emailInpudId}>Email </label>
          <input
            type="email"
            name="email"
            id={emailInpudId}
            value={authEmail}
            onChange={onInputChange}
            required
          />
          <label htmlFor={passwordInpudId}>Password </label>
          <input
            type="password"
            name="password"
            id={passwordInpudId}
            value={password}
            onChange={onInputChange}
            required
          />

          <RegisterButton type="submit">Sign Up</RegisterButton>
        </StyledForm>
      )}

      {isMobile && (
        <StyledFormMobile onSubmit={handleSubmit}>
          <label htmlFor={emailInpudId}>Email </label>
          <input
            type="email"
            name="email"
            id={emailInpudId}
            value={authEmail}
            onChange={onInputChange}
            required
          />
          <label htmlFor={passwordInpudId}>Password </label>
          <input
            type="password"
            name="password"
            id={passwordInpudId}
            value={password}
            onChange={onInputChange}
            required
          />

          <RegisterButtonMobile type="submit">Sign Up</RegisterButtonMobile>
        </StyledFormMobile>
      )}
    </>
  );
};

export default RegisterForm;
