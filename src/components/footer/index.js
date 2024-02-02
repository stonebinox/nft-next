import React from "react";

import {
  EmptyDiv,
  FooterButton,
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
        {buttonDisplay ? (
          <FooterButton type="primary">Explore Marketplace</FooterButton>
        ) : (
          <EmptyDiv />
        )}
      </FooterContent>
    </FooterContainer>
  );
};
