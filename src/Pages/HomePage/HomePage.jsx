import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useState } from 'react';

export const HomePage = () => {
  const [flag, setFlag] = useState(false);

  const handleAlreadyRegistered = () => {
    setFlag(true);
  };

  const handleNoAcc = () => {
    setFlag(false);
  };

  return (
    <>
      {flag ? (
        <>
          <RegisterForm></RegisterForm>
          <p>Already registered?</p>
          <button type="button" onClick={handleNoAcc}>
            {' '}
            Login!
          </button>
        </>
      ) : (
        <>
          <LoginForm></LoginForm>
          <p>Don't have an account?</p>
          <button type="button" onClick={handleAlreadyRegistered}>
            Register
          </button>
        </>
      )}
    </>
  );
};
