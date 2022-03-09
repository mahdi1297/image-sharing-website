import React from "react";
import { Theme } from "theme/theme";
import { IButtomModel } from "./model";
import { ButtonBody } from "./style";

const ButtonComponent = ({ children, size, color }: IButtomModel) => {
  let colorName, bgColor, sizeNumber, borderColor;

  switch (size) {
    case "xl":
      sizeNumber = "10px 20px";
      break;
    case "lg":
      sizeNumber = "8px 17px";
      break;
    case "md":
      sizeNumber = "5px 15px";
      break;
  }

  switch (color) {
    case "gray":
      colorName = Theme.colors.gray;
      borderColor = Theme.colors.gray;
      bgColor = "#fff";
      break;
    case "primary":
      colorName = Theme.colors.main;
      borderColor = Theme.colors.main;
      break;
    case "danger":
      colorName = Theme.colors.danger;
      borderColor = Theme.colors.danger;
      bgColor = "#fff";
      break;
    case "light":
      colorName = Theme.colors.gray;
      borderColor = "none";
      bgColor = "none";
  }

  return (
    <ButtonBody
      bgColor={bgColor}
      borderColor={borderColor}
      colorName={colorName}
      size={sizeNumber}
    >
      {children}
    </ButtonBody>
  );
};

export default ButtonComponent;
