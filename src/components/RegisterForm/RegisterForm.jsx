import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { regThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";

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
    /* border-radius: 4px; */

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

const RegisterButton = styled.button`
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

const RegisterForm = () => {
  // const nameInpudId = nanoid();
  const emailInpudId = nanoid();
  const passwordInpudId = nanoid();

  // const [name, setName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    switch (event.target.name) {
      // case "name":
      //   setName(event.target.value);
      //   break;
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

    dispatch(regThunk({ authEmail, password }));

    // setName("");
    setAuthEmail("");
    setPassword("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <label htmlFor={nameInpudId}>Name </label>
      <input
        type="text"
        name="name"
        id={nameInpudId}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={onInputChange}
        required
      /> */}

      <label htmlFor={emailInpudId}>Email </label>
      <input
        type="email"
        name="email"
        id={emailInpudId}
        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Email must have the following shape: email@email.com"
        value={authEmail}
        onChange={onInputChange}
        required
      />

      <label htmlFor={passwordInpudId}>Password </label>
      <input
        type="password"
        name="password"
        id={passwordInpudId}
        title="Password must be strong as teenager's erection!"
        value={password}
        onChange={onInputChange}
        required
      />

      <RegisterButton type="submit">Sign Up</RegisterButton>
    </StyledForm>
  );
};

export default RegisterForm;
