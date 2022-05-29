import { TEXT, PASSWORD, NUMBER, LG } from "@consts/index";
import React, { useEffect, useRef } from "react";
import Input from "./input";

type Props = {
  formArray: any;
  register: any;
  errors: any;
};

const FormWrapper: React.FC<Props> = ({ formArray, register, errors }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {formArray &&
        formArray.map((form: any) => {
          if (
            form.type === TEXT ||
            form.type === PASSWORD ||
            form.type === NUMBER
          ) {
            return (
              <div
                key={form.id}
                className={form.size_class ? form.size_class : LG}
              >
                <Input
                  label={form.label}
                  type={form.type}
                  register={{ ...register(form.name, form.validation) }}
                  errors={errors?.[form.name]}
                  size_class={form.size_class && form.size_class}
                />
              </div>
            );
          }
        })}
    </div>
  );
};

export default FormWrapper;
