import styled from "styled-components";

import { colors } from "@/utils/colors";
import { BASE_SPACING, customSpacing } from "@/utils/spacing";
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
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const SidebarTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SidebarTitle = styled(CommonText)`
  font-weight: 700;
  font-size: 32px;
  text-align: left;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;
