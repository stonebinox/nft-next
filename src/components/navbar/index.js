import React from "react";
import Image from "next/image";

import {
  NavbarContainer,
  NavbarLink,
  NavbarRightContent,
  WalletButton,
  WalletIcon,
} from "./index.styles";
import { Logo } from "../logo";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavbarRightContent>
        <NavbarLink href="#">Explore Marketplace</NavbarLink>
        <WalletButton>
          <Image src="/assets/wallet.svg" alt="Wallet" width="24" height="24" />
        </WalletButton>
      </NavbarRightContent>
    </NavbarContainer>
  );
};
