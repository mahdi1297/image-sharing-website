import { PRIMARY, XL } from "constaints/consts";
import { validateEmail } from "helper/emailValidator";
import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "shared/button";
import FormSharedComponent from "shared/form";
import { formStructure } from "./formStructure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmitHandler = (data: any) => {
    console.log(validateEmail(data.username));
  };

  return (
    <form onSubmit={handleSubmit(loginSubmitHandler)}>
      {formStructure.map((inp) => (
        <FormSharedComponent
          key={inp.id}
          size={inp.size}
          type={inp.type}
          label={inp.label}
          placeholder={inp.placeholder}
          register={{
            ...register(inp.name, inp.validators),
          }}
          errors={errors[inp.name]}
        />
      ))}
      <ButtonComponent block size={XL} color={PRIMARY}>
        Register
      </ButtonComponent>
    </form>
  );
};

export default Register;
