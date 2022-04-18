import { PRIMARY, XL } from "constaints/consts";
import { validateEmail } from "helper/emailValidator";
import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "shared/button";
import FormShared from "shared/form";
import { formStructure } from "./formStructure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmitHandler = (data: any) => {
    // console.log(validateEmail(data.username));
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(loginSubmitHandler)}>
      <FormShared data={formStructure} register={register} errors={errors} />
      <ButtonComponent block size={XL} color={PRIMARY}>
        Register
      </ButtonComponent>
    </form>
  );
};

export default Register;
