import React from "react";

import { SubtitleText, TitleContainer, TitleText } from "./index.styles";

export const PageTitle = ({ title = "", subtitle = "" }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      {subtitle.trim() !== "" && <SubtitleText>{subtitle}</SubtitleText>}
    </TitleContainer>
  );
};
