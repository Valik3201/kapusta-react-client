import React from "react";
import Content from "./Content";
import LoginBg from "./LoginBg";

const BackgroundLogin = ({ children }) => {
  return (
    <Content>
      <LoginBg />
      {children}
    </Content>
  );
};

export default BackgroundLogin;


