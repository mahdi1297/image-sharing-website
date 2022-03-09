import React from "react";
import { Theme } from "theme/theme";
import { ButtomModel } from "./model";
import { ButtonBody } from "./style";
import { DANGER, GRAY, LG, LIGHT, MD, PRIMARY, XL } from "constaints/consts";

const ButtonComponent = ({ children, size, color, block }: ButtomModel) => {
  let colorName, bgColor, sizeNumber, borderColor;

  switch (size) {
    case XL:
      sizeNumber = "10px 20px";
      break;
    case LG:
      sizeNumber = "8px 17px";
      break;
    case MD:
      sizeNumber = "5px 15px";
      break;
  }

  switch (color) {
    case GRAY:
      colorName = Theme.colors.gray;
      borderColor = Theme.colors.gray;
      bgColor = "#fff";
      break;
    case PRIMARY:
      colorName = "#fff";
      borderColor = Theme.colors.main;
      bgColor = Theme.colors.main;
      break;
    case DANGER:
      colorName = Theme.colors.danger;
      borderColor = Theme.colors.danger;
      bgColor = "#fff";
      break;
    case LIGHT:
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
      block={block}
    >
      {children}
    </ButtonBody>
  );
};

export default ButtonComponent;
