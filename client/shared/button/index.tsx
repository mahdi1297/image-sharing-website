import Spinner from "@shared/spinner";
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
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({
  text,
  buttonType,
  classname,
  onclick,
  children,
  block,
  disabled,
  isLoading = false,
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
      {isLoading === true ? (
        <div>
          <Spinner />
        </div>
      ) : (
        text || children
      )}
    </button>
  );
};

export default Button;
