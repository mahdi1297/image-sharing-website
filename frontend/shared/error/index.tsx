import React from "react";
import { Body } from "./style";

type error = {
  message: string;
};

const Error = ({ message }: error) => {
  return <Body>{message}</Body>;
};

export default Error;
