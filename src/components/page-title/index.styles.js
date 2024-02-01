import styled from "styled-components";

import { colors } from "@/utils/colors";
import { BASE_SPACING, DOUBLE_BASE_SPACING, MAX_SCREEN } from "@/utils/spacing";

export const TitleContainer = styled.div`
  width: 100%;
  max-width: ${MAX_SCREEN};
  margin: 0 auto;
  border: 1px solid ${colors.white};
  border-radius: ${BASE_SPACING};
  padding-top: ${DOUBLE_BASE_SPACING};
  padding-bottom: ${DOUBLE_BASE_SPACING};
  text-align: center;
`;

export const TitleText = styled.div`
  margin: 0 auto;
  width: auto;
  font-family: "Cinzel", serif;
  font-weight: 700;
  font-size: 44px;
  background: linear-gradient(90deg, #e7e7e7, #9e9e9e, #f2f2f2, #949494);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;
