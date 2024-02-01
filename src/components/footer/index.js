import React from "react";

import {
  EmptyDiv,
  FooterContainer,
  FooterContent,
  FooterText,
} from "./index.styles";
import { Logo } from "../logo";

export const Footer = ({ buttonDisplay = false }) => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo />
        <FooterText>NFT Sea 2022 &copy; All rights reserved</FooterText>
        {buttonDisplay ? <div></div> : <EmptyDiv />}
      </FooterContent>
    </FooterContainer>
  );
};
