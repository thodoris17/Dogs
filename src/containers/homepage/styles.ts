import styled from "styled-components";
import { spacing, typography, TypographySize } from "../../styles/variables";

export const container = styled.div`
  position: relative;
  max-width: 1248px;
  margin: auto;
  font-family: "Roboto", sans-serif;
  padding: ${spacing.large} ${spacing.regular};
  ${typography(TypographySize.regular)}
`;

export const title = styled.h2`
  font-weight: 300;
  text-align: center;
  ${typography(TypographySize.large)}
`;

export const dropdownContainer = styled.div`
  max-width: 800px;
  margin: ${spacing.regular} auto;
`;

export const imagePanelContainer = styled.div`
  margin-top: ${spacing.extraLarge};
`;
