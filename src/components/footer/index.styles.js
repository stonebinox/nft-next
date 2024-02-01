import { colors } from "@/utils/colors";
import { BASE_SPACING, MAX_SCREEN } from "@/utils/spacing";
import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding-top: ${BASE_SPACING};
  padding-bottom: ${BASE_SPACING};
  background-color: ${colors.black};
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: ${MAX_SCREEN};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

export const FooterText = styled.div`
  text-align: center;
  color: ${colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  flex: 1;
`;

export const EmptyDiv = styled.div`
  width: 150px;
`;
