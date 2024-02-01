import styled from "styled-components";

import { colors } from "@/utils/colors";

export const LogoHolder = styled.div`
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
