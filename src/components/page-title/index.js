import React from "react";

import { TitleContainer, TitleText } from "./index.styles";

export const PageTitle = ({ title = "" }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
  );
};
