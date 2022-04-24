import { SUCCESS, WARNING, PRIMARY, ERROR, DANGER } from "constaints/consts";
import React from "react";
import { Theme } from "theme/theme";
import { Body } from "./style";

type Props = {
  type: string;
  message: string;
  icon?: string;
};

const AlertShared = ({ type, message, icon }: Props) => {
  //

  let bgColor = Theme.colors.main,
    textColor = Theme.colors.black,
    borderColor = Theme.colors.black;

  switch (type) {
    case SUCCESS:
      bgColor = Theme.colors.success;
      borderColor = "#63932f";
      break;
    case WARNING:
      bgColor = Theme.colors.warning;
      borderColor = "#ffe55d";
      break;
    case PRIMARY:
      bgColor = Theme.colors.main;
      textColor = "#fff";
      break;
    case DANGER:
      bgColor = Theme.colors.danger;
      borderColor = "#9f2307";
      textColor = "#fff";
      break;
  }

  //
  return (
    <Body bgColor={bgColor} textColor={textColor} borderColor={borderColor}>
      {message}
    </Body>
  );
};

export default AlertShared;
