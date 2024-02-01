import { BASE_SPACING, MAX_SCREEN } from "@/utils/spacing";
import React from "react";
import styled from "styled-compoennts";

const ListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${MAX_SCREEN};
  height: auto;
  margin-top: ${BASE_SPACING};
`;

export const NFTList = () => {
  return <ListContainer></ListContainer>;
};
