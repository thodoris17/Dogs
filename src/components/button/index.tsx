import React from "react";
import * as s from "./styles";

/**
 * Simple button component
 * @param text Text to be displayed inside the button
 * @param onClick Callback for button click
 */

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <s.button onClick={onClick} data-testid={"expandButton"}>
      {text}
    </s.button>
  );
};
