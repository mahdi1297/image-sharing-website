import React from "react";
import ButtonComponent from "shared/button";
import { useForm } from "react-hook-form";
import { formStructure } from "./formStructer";
import { PRIMARY, SUBMIT, XL } from "constaints/consts";
import FormShared from "shared/form";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(loginSubmitHandler)}>
      <FormShared data={formStructure} register={register} errors={errors} />
      <ButtonComponent block size={XL} color={PRIMARY} type={SUBMIT}>
        Login
      </ButtonComponent>
    </form>
  );
};

export default Login;
