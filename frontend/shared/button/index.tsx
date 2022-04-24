import React from "react";
import { Theme } from "theme/theme";
import { ButtomModel } from "./model";
import { ButtonBody } from "./style";
import {
  DANGER,
  DARK,
  GRAY,
  LG,
  LIGHT,
  MD,
  PRIMARY,
  XL,
} from "constaints/consts";

const ButtonShared = ({
  children,
  size,
  color,
  block,
  onclick,
  disabled,
  type,
}: ButtomModel) => {
  let colorName, bgColor, sizeNumber, borderColor;

  switch (size) {
    case XL:
      sizeNumber = "10px 40px";
      break;
    case LG:
      sizeNumber = "8px 17px";
      break;
    case MD:
      sizeNumber = "5px 15px";
      break;
  }

  function setButtonType(
    colorName: string,
    borderColor: string,
    bgColor: string
  ) {
    colorName = colorName;
    borderColor = borderColor;
    bgColor = bgColor;
  }

  switch (color) {
    case GRAY:
      colorName = Theme.colors.gray;
      borderColor = Theme.colors.gray;
      bgColor = "#fff";
      break;
    case DARK:
      colorName = Theme.colors.black;
      borderColor = Theme.colors.black;
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
      className={disabled ? "disabled" : ""}
      bgColor={bgColor}
      borderColor={borderColor}
      colorName={colorName}
      size={sizeNumber}
      block={block}
      onClick={onclick}
      disabled={disabled}
      type={type}
    >
      {children}
    </ButtonBody>
  );
};

export default ButtonShared;
