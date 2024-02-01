import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { BASE_SPACING, MAX_SCREEN } from "@/utils/spacing";
import { colors } from "@/utils/colors";

const NavbarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${MAX_SCREEN};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${BASE_SPACING};
  padding-top: ${BASE_SPACING};
  padding-bottom: ${BASE_SPACING};
  margin-bottom: ${BASE_SPACING};
`;

const LogoHolder = styled.div`
  color: ${colors.white};
  font-family: "Cinzel", serif;
  font-weight: 700;
  font-size: 48px;

  .sea {
    background: linear-gradient(90deg, #627eea, #ec4467);
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }
`;

const WalletButton = styled.div`
  cursor: pointer;
  text-align: center;
  color: ${colors.white};
`;

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
