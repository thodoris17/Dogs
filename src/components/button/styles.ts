import styled from "styled-components";
import { spacing } from "../../styles/variables";

export const button = styled.button`
  border-radius: 20px;
  padding: ${spacing.regular};
  border: 1px solid teal;
  outline: none;
  background: teal;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;
