import styled from "styled-components";

import { BASE_SPACING, MAX_SCREEN } from "@/utils/spacing";
import { colors } from "@/utils/colors";

export const NavbarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${MAX_SCREEN};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${BASE_SPACING};
  padding-top: ${BASE_SPACING};
  padding-bottom: ${BASE_SPACING};
  margin-bottom: ${BASE_SPACING};
`;

export const WalletButton = styled.div`
  cursor: pointer;
  text-align: center;
  color: ${colors.white};
`;
