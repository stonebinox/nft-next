import React from "react";
import Image from "next/image";

import {
  LogoHolder,
  NavbarContainer,
  WalletButton,
  WalletIcon,
} from "./index.styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoHolder>
        NFT <span className="sea">Sea</span>
      </LogoHolder>
      <WalletButton>
        <Image src="/assets/wallet.svg" alt="Wallet" width="24" height="24" />
      </WalletButton>
    </NavbarContainer>
  );
};
