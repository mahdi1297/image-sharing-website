import { LG, TEXT } from "constaints/consts";
import React from "react";
import Error from "shared/error";
import { InputShareModel } from "./model";
import { FormWrapper } from "./style";

/**
 * Dynamic input shared component which could be converted to all type of inputs
 * @param {string} size - The size of input wrapper.default: larg. can be set to medim - optional.
 * @param {string} type - The input type. default: text - optional.
 * @param {string} label - The label of input - required.
 * @param {string} placeholder - The placeholder of input - required.
 * @param {string} register - The form handler registeration.
 * @param {string} errors - The form error - required.
 */
const FormSharedComponent = ({
  size = LG,
  type = TEXT,
  label,
  placeholder,
  register,
  errors,
}: InputShareModel) => {
  return (
    <FormWrapper size={size}>
      <div className="label">{label}</div>
      <input type={type} placeholder={placeholder} {...register} />

      {errors && <Error message={errors.message} />}
    </FormWrapper>
  );
};

export default FormSharedComponent;
