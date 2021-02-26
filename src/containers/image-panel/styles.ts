import styled from "styled-components";
import {
  device,
  spacing,
  typography,
  TypographySize,
} from "../../styles/variables";

export const header = styled.div`
  display: flex;
`;

export const title = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-bottom: ${spacing.regular};
  ${typography(TypographySize.extraLarge)}
`;

export const imagePanel = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${spacing.regular};
  align-content: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  align-self: center;
  justify-self: center;
`;

export const buttonContainer = styled.div`
  margin-top: ${spacing.regular};
  text-align: center;
`;
