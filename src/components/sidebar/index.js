import React from "react";
import Image from "next/image";

import {
  CloseButton,
  PromptLink,
  PromptText,
  SidebarContainer,
  SidebarContent,
  SidebarTitle,
  SidebarTitleRow,
  WalletContainer,
  WalletTitle,
} from "./index.styles";

const wallets = [
  {
    id: 1,
    text: "Connect Metamask",
    icon: "/assets/metamask.svg",
  },
  {
    id: 2,
    text: "Connect Portis",
    icon: "/assets/portis.svg",
  },
  {
    id: 3,
    text: "Connect Torus",
    icon: "/assets/torus.svg",
  },
  {
    id: 4,
    text: "Connect Walletlink",
    icon: "/assets/walletlink.jpeg",
  },
];

export const Sidebar = ({ hideSidebar }) => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarTitleRow>
          <SidebarTitle>Connect Wallet</SidebarTitle>
          <CloseButton onClick={hideSidebar}>
            <Image src="/assets/close.svg" alt="Close" width="24" height="24" />
          </CloseButton>
        </SidebarTitleRow>
        {wallets.map((wallet) => (
          <WalletContainer key={wallet.id}>
            <Image src={wallet.icon} alt={wallet.text} width="24" height="24" />
            <WalletTitle>{wallet.text}</WalletTitle>
          </WalletContainer>
        ))}
        <PromptText>
          Don&apos;t have a wallet? <PromptLink href="#">Learn more</PromptLink>
        </PromptText>
      </SidebarContent>
    </SidebarContainer>
  );
};
