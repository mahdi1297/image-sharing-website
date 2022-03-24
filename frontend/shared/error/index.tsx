import React from "react";
import { Body } from "./style";

type error = {
  message: string;
};

const ErrorShared = ({ message }: error) => {
  return <Body>{message}</Body>;
};

export default ErrorShared;
