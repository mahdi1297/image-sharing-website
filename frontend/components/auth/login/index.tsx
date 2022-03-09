import React from "react";
import ButtonComponent from "shared/button";
import FormSharedComponent from "shared/form";
import { useForm } from "react-hook-form";
import { formStructure } from "./formStructer";
import { PRIMARY, XL } from "constaints/consts";
import { validateEmail } from "helper/emailValidator";

const Login: React.FC = () => {
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
        Login
      </ButtonComponent>
    </form>
  );
};

export default Login;
