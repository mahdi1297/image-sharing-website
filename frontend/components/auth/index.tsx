import React, { useState } from "react";
import { Body } from "./style";
import Login from "./login";
import Register from "./register";
import { LOGIN_MODE, REGISTER_MODE } from "constaints/consts";

const AuthComponent = () => {
  const [authMode, setAuthMode] = useState(LOGIN_MODE);

  const setLoginModeHandler = () => {
    setAuthMode(LOGIN_MODE);
  };
  const setRegisterModeHandler = () => {
    setAuthMode(REGISTER_MODE);
  };

  return (
    <div style={{ position: "relative" }}>
      <Body>
        <div className="header">
          <div
            onClick={setLoginModeHandler}
            className={authMode === LOGIN_MODE ? "active" : ""}
          >
            Login
          </div>
          <div>/</div>
          <div
            onClick={setRegisterModeHandler}
            className={authMode === REGISTER_MODE ? "active" : ""}
          >
            Register
          </div>
        </div>

        <main>
          {authMode === LOGIN_MODE && <Login />}
          {authMode === REGISTER_MODE && <Register />}
        </main>
      </Body>
    </div>
  );
};

export default AuthComponent;
