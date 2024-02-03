import React, { useState } from "react";
import Image from "next/image";

import {
  NavbarContainer,
  NavbarLink,
  NavbarRightContent,
  WalletButton,
  WalletIcon,
} from "./index.styles";
import { Logo } from "../logo";
import { Sidebar } from "../sidebar";

export const Navbar = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const walletClick = () => {
    setSidebarVisibility(true);
  };

  const hideSidebar = () => {
    setSidebarVisibility(false);
  };

  return (
    <>
      <NavbarContainer>
        <Logo />
        <NavbarRightContent>
          <NavbarLink href="#">Explore Marketplace</NavbarLink>
          <WalletButton onClick={walletClick}>
            <Image
              src="/assets/wallet.svg"
              alt="Wallet"
              width="24"
              height="24"
            />
          </WalletButton>
        </NavbarRightContent>
      </NavbarContainer>
      {sidebarVisibility && <Sidebar />}
    </>
  );
};
