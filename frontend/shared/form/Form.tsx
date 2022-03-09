import React from "react";
import { InputShareModel } from "./Form.model";
import { FormWrapper } from "./Form.style";

/**
 * Dynamic input shared component which could be converted to all type of inputs
 * @param {string} size - The size of input wrapper.default: larg. can be set to medim - optional.
 * @param {string} type - The input type. default: text - optional.
 * @param {string} label - The label of input - required.
 * @param {string} placeholder - The placeholder of input - required.
 */
const FormSharedComponent = ({
  size = "larg",
  type = "text",
  label,
  placeholder,
}: InputShareModel) => {
  //
  console.log(size);

  return (
    <FormWrapper size={size}>
      <div className="label">{label}</div>
      <input type={type} placeholder={placeholder} />
    </FormWrapper>
  );
};

export default FormSharedComponent;
