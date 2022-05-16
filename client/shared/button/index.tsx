import React, { MouseEventHandler } from "react";
import styles from "./style.module.scss";

type Props = {
  text: string;
  buttonType?: "button" | "submit" | "reset";
  classname?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ text, buttonType, classname, onclick }) => {
  return (
    <button
      className={`${styles.button} btn ${classname}`}
      type={buttonType}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
