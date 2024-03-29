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
  margin-bottom: ${customSpacing("128")};
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
  overflow-y: hidden;
`;

export const FileSelectorTitle = styled(CommonText)`
  font-size: 18px;
`;

export const FileSelectorSubtext = styled(CommonText)`
  font-size: 14px;
  opacity: 0.6;
  margin-top: ${QUARTER_BASE_SPACING};
`;

export const HiddenFileSelector = styled.input`
  &[type="file"] {
    opacity: 0;
    position: absolute;
  }
`;

// technically I'd abstract this to a base input class and have it imported across multiple input types but we only have two here so this should be enough
const commonStyles = `
width: 100%;
border: 1px solid ${colors.grey};
background: ${colors.greyDark};
padding: ${BASE_SPACING};
color: ${colors.white};
font-family: "Open Sans", sans-serif;
font-size: 16px;
font-weight: 400;
text-align: left;
height: ${customSpacing("60")};
border-radius: ${customSpacing("5")};
margin-bottom: ${BASE_SPACING};
`;

export const InputField = styled.input`
  &[type="text"] {
    ${commonStyles}
  }
`;

export const TextareaField = styled.textarea`
  ${commonStyles}
  height: auto;
  min-height: ${customSpacing("158")};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  border: 1px solid ${colors.red};
  border-radius: ${customSpacing("5")};
  padding: ${BASE_SPACING} 0;
  margin-bottom: ${BASE_SPACING};
  background-color: ${colors.redLight};
`;

export const AlertText = styled(CommonText)`
  color: ${colors.white};
`;

export const SuccessContainer = styled(ErrorContainer)`
  border: 1px solid ${colors.green};
  background-color: ${colors.greenDark};
`;
