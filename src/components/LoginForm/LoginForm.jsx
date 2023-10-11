import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/auth.thunk";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 4px;
  width: 300px;

  border-top: 5px solid var(--dark);
  /* border-bottom: 4px solid var(--dark); */
  padding: 16px;

  input {
    display: flex;
    width: 210px;
    flex-direction: column;
    border: 2px solid var(--yellow);

    transition-property: border;
    transition-duration: 250ms;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid var(--dark);
    }
  }
  /* button {
    margin-left: auto;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus {
      outline: none;
      border: 1px solid skyblue;
    }
  } */
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: var(--dark);
  clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);

  color: var(--yellow);
  font-weight: bold;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  transition: var(--trans);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }
`;

const LoginForm = () => {
  const emailInpudId = nanoid();
  const passwordInpudId = nanoid();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
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

    dispatch(loginThunk({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor={emailInpudId}>Email </label>
      <input
        type="email"
        name="email"
        id={emailInpudId}
        value={email}
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
  );
};

export default LoginForm;
