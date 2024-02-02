import styled from "styled-components";

import { colors } from "@/utils/colors";

export const Main = styled.main`
  background: url(/assets/bg.png) no-repeat center;
  background-size: cover;
`;

export const CommonText = styled.div`
  color: ${colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;
