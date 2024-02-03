import styled from "styled-components";

import { colors } from "@/utils/colors";
import {
  BASE_SPACING,
  HALF_BASE_SPACING,
  customSpacing,
} from "@/utils/spacing";
import { CommonText } from "@/app/page.styles";

export const ModalContainer = styled.div`
  width: ${customSpacing("457")};
  height: auto;
  padding: ${BASE_SPACING};
  background-color: ${colors.black};
  border-radius: ${BASE_SPACING};
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 15%;
  left: calc((100% - ${customSpacing("457")}) / 2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(${HALF_BASE_SPACING});
`;

export const ModalImage = styled.img`
  width: 100%;
  border: 0;
  margin-bottom: ${BASE_SPACING};
`;

export const ModalTitle = styled.div`
  font-family: "Cinzel", serif;
  font-weight: 700;
  color: ${colors.white};
  font-size: 22px;
  margin-bottom: ${HALF_BASE_SPACING};
  width: 100%;
  text-align: left;
`;

export const ModalDescription = styled(CommonText)`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: ${BASE_SPACING};
  width: 100%;
  text-align: left;
`;
