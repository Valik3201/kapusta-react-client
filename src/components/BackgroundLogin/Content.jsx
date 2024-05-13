import React from "react";
import styled from "styled-components";
import { device } from "../../utils/mixins";
import CabbageBar from "../../assets/cabbage-bar.svg";
import CabbageTwo from "../../assets/cabbage-two.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 56px);
  max-width: 100%;
  overflow-x: hidden;



  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    background-image: url(${CabbageBar});
    background-repeat: no-repeat;

    ${device.tablet} {
      top: 1028px;
      left: 497px;
      width: 183px;
      height: 146px;
      background-image: url(${CabbageTwo});
    //   background-repeat: no-repeat;
    // }

    ${device.desktop} {
      bottom: 0px;
      left: 10px;
      width: 1334px;
      height: 232px;
      background-image: url(${CabbageBar});
      background-size: 100% auto;
      background-repeat: no-repeat;
    }
  }
`;

const Content = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
