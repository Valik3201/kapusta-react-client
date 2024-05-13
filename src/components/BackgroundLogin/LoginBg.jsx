import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

const Container = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: ${colors.loginBg};
  height: 320px;
  border-radius: 0 0 0 110px;

  ${device.tablet} {
    height: 56vh;
    border-radius: 0 0 0 106px;
  }
  ${device.desktop} {
    height: 57vh;
    border-radius: 0 0 0 110px;
  }
`;

const LoginBg = () => {
  return <Container />;
};

export default LoginBg;

