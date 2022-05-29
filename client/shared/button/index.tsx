import React, { MouseEventHandler } from "react";
import styles from "./style.module.scss";

type Props = {
  text?: string;
  buttonType?: "button" | "submit" | "reset";
  classname?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  block?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  text,
  buttonType,
  classname,
  onclick,
  children,
  block,
  disabled,
}) => {
  return (
    <button
      className={`${styles.button} btn ${classname} ${
        block && styles.btn_block
      } ${disabled && styles.disabled}`}
      type={buttonType}
      onClick={onclick}
      disabled={disabled}
    >
      {text || children}
    </button>
  );
};

export default Button;
