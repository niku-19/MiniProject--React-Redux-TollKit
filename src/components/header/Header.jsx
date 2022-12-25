import React, { useState } from "react";
import Login from "../../components/login/Login";
import SignUp from "../../components/Register/SignUp";

const Header = () => {
  const [alreadyHaveAcct, setAlreadyHaveAcct] = useState(true);
  const onHaveAccountHandler = () => {
    setAlreadyHaveAcct(false);
  };
  const onHaveNotAccountHandler = () => {
    setAlreadyHaveAcct(true);
  };
  return (
    <>
      {alreadyHaveAcct ? (
        <Login onLoginClick={onHaveAccountHandler} />
      ) : (
        <SignUp onSingUpClick={onHaveNotAccountHandler} />
      )}
    </>
  );
};

export default Header;
