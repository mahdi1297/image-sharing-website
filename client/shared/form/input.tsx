import React from "react";
import styles from "./style.module.scss";

type Props = {
  label: string;
  type: string;
  required?: boolean;
  register: any;
  errors: any;
  size_class?: string;
};

const Input: React.FC<Props> = ({
  label,
  required,
  register,
  errors,
  size_class,
  type,
}) => {
  return (
    <div
      className={`${styles.field__container} ${size_class ? size_class : "lg"}`}
    >
      <label>
        {label} {required && <span className="ml-5">*</span>}
      </label>

      <input type={type} className="mt-10" {...register} />
      {errors && <p className="mt-5">{errors.message}</p>}
    </div>
  );
};

export default Input;
