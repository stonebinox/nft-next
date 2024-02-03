import React from "react";
import Image from "next/image";

import {
  CloseButton,
  SidebarContainer,
  SidebarContent,
  SidebarTitle,
  SidebarTitleRow,
} from "./index.styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarTitleRow>
          <SidebarTitle>Connect Wallet</SidebarTitle>
          <CloseButton>
            <Image src="/assets/close.svg" alt="Close" width="24" height="24" />
          </CloseButton>
        </SidebarTitleRow>
      </SidebarContent>
    </SidebarContainer>
  );
};
