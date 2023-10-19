import { nanoid } from "nanoid";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";
import {
  LoginButton,
  LoginButtonMobile,
  StyledForm,
  StyledFormMobile,
} from "./LoginForm.styled";
import { useMediaQuery } from "react-responsive";

const LoginForm = () => {
  const emailInpudId = nanoid();
  const passwordInpudId = nanoid();

  const [authEmail, setAuthEmail] = useState("");
  const [password, setPassword] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 689 });

  const dispatch = useDispatch();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginThunk({ authEmail, password }));

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

          <LoginButton type="submit">Log In</LoginButton>
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

          <LoginButtonMobile type="submit">Log In</LoginButtonMobile>
        </StyledFormMobile>
      )}
    </>
  );
};

export default LoginForm;
