import { PASSWORD, TEXT, TEXTAREA } from "constaints/consts";
import React from "react";
import Error from "shared/error";
import { Body, FormWrapper } from "./style";

/**
 * Dynamic input shared component which could be converted to all type of inputs
 * @param {string} size - The size of input wrapper.default: larg. can be set to medim - optional.
 * @param {string} type - The input type. default: text - optional.
 * @param {string} label - The label of input - required.
 * @param {string} placeholder - The placeholder of input - required.
 * @param {string} register - The form handler registeration.
 * @param {string} errors - The form error - required.
 */
const FormShared = ({ data, register, errors }: any) => {
  // Input type specification
  let inputIndicator =
    data &&
    data.map((inp: any) => {
      //
      if (inp.type === TEXT || inp.type === PASSWORD) {
        //
        return (
          //
          <FormWrapper key={inp.id} size={inp.size}>
            <div className="label">{inp.label}</div>
            <input
              type={inp.type}
              placeholder={inp.placeholder}
              {...register(inp.name, inp.validation)}
            />

            {errors && <Error message={errors?.[inp.name]?.message} />}
          </FormWrapper>
        );
      } else if (inp.type === TEXTAREA) {
        //
        return (
          //
          <FormWrapper key={inp.id} size={inp.size}>
            <div className="label">{inp.label}</div>
            <textarea
              type={inp.type}
              placeholder={inp.placeholder}
              {...register(inp.name, inp.validation)}
              rows={data.rows | 5}
              cols={data.cols | 60}
            ></textarea>

            {errors && <Error message={errors?.[inp.name]?.message} />}
          </FormWrapper>
        );
      }
    });

  return <Body>{inputIndicator}</Body>;
};

export default FormShared;
