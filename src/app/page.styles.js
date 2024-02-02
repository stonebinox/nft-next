import styled from "styled-components";

import { colors } from "@/utils/colors";
import {
  BASE_SPACING,
  HALF_BASE_SPACING,
  customSpacing,
} from "@/utils/spacing";

export const Main = styled.main`
  background: url(/assets/bg.png) no-repeat center;
  background-size: cover;

  ${({ isinactive }) =>
    isinactive === "true" && `filter: blur(${HALF_BASE_SPACING})`}
`;

export const CommonText = styled.div`
  color: ${colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const Button = styled.button`
  width: auto;
  min-width: ${customSpacing("200")};
  min-height: ${customSpacing("64")};
  color: ${colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border-radius: ${customSpacing("3")};
  background: rgba(0, 0, 0, 0);
  border: 0;
  cursor: pointer;
  padding: ${BASE_SPACING};
  flex: 1;

  &[type="primary"] {
    background: linear-gradient(90deg, #627eea, #ec4467);
  }
`;
