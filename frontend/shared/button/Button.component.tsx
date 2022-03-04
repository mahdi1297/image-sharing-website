import React from "react";
import { Theme } from "theme/theme";
import { IButtomModel } from "./Button.model";
import { ButtonBody } from "./Button.style";

const ButtonComponent = ({ children, size, color }: IButtomModel) => {
  let colorName, bgColor, sizeNumber;

  switch (size) {
    case "xg":
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
      bgColor = "#fff";
      break;
    case "primary":
      colorName = Theme.colors.main;
  }

  return (
    <ButtonBody bgColor={bgColor} colorName={colorName} size={sizeNumber}>
      {children}
    </ButtonBody>
  );
};

export default ButtonComponent;
