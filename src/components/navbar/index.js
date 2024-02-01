import React from "react";
import Image from "next/image";

import { NavbarContainer, WalletButton, WalletIcon } from "./index.styles";
import { Logo } from "../logo";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <WalletButton>
        <Image src="/assets/wallet.svg" alt="Wallet" width="24" height="24" />
      </WalletButton>
    </NavbarContainer>
  );
};
