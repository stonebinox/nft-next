import styled from "styled-components";

import { colors } from "@/utils/colors";
import {
  BASE_SPACING,
  BASE_SPACING_AND_HALF,
  HALF_BASE_SPACING,
  customSpacing,
} from "@/utils/spacing";
import { CommonText } from "@/app/page.styles";

export const SidebarContainer = styled.div`
  width: ${customSpacing("340")};
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${colors.black};
  padding: ${BASE_SPACING};
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: flex-start;
  align-items: left;
  width: 100%;
`;

export const SidebarTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${BASE_SPACING_AND_HALF};
`;

export const SidebarTitle = styled(CommonText)`
  font-weight: 700;
  font-size: 32px;
  text-align: left;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const WalletContainer = styled.div`
  width: 100%;
  max-width: ${customSpacing("280")};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${BASE_SPACING};
  background-color: ${colors.greyDarker};
  border-radius: ${customSpacing("10")};
  margin-bottom: ${BASE_SPACING};
  cursor: pointer;
`;

export const WalletTitle = styled(CommonText)`
  font-size: 20px;
  text-align: center;
  margin-left: ${BASE_SPACING};
`;

export const PromptText = styled(CommonText)`
  text-align: left;
  margin-top: ${HALF_BASE_SPACING};
`;

export const PromptLink = styled.a`
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: linear-gradient(90deg, #627eea, #ec4467);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;
