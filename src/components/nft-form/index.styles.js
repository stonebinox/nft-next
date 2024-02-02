import styled from "styled-components";

import {
  BASE_SPACING,
  QUARTER_BASE_SPACING,
  customSpacing,
} from "@/utils/spacing";
import { colors } from "@/utils/colors";
import { CommonText } from "@/app/page.styles";

export const FormContainer = styled.form`
  width: 100%;
  max-width: ${customSpacing("560")};
  height: auto;
  margin-top: ${customSpacing("80")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const FileSelector = styled.div`
  width: 100%;
  border-radius: ${customSpacing("5")};
  height: auto;
  padding: ${BASE_SPACING} 0;
  border: 1px dashed ${colors.grey};
  background-color: ${colors.greyDark};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${BASE_SPACING};
  cursor: pointer;
`;

export const FileSelectorTitle = styled(CommonText)`
  font-size: 18px;
`;

export const FileSelectorSubtext = styled(CommonText)`
  font-size: 14px;
  opacity: 0.6;
  margin-top: ${QUARTER_BASE_SPACING};
`;
