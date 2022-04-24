import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "shared/button";
import FormShared from "shared/form";
import { Loader } from "shared/loader";
import ToastShared from "shared/toast";
import { formStructure } from "./formStructure";
import { UserData } from "./model";
import { registerUser } from "./service";
import { PRIMARY, XL } from "constaints/consts";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const loginSubmitHandler = async (data: any) => {
    const { email, username, password } = data;

    setIsLoading(true);

    const userData: UserData = {
      email: email,
      username: username,
      password: password,
    };

    // Call request function
    registerUser(userData)
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      })
      .catch((error) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      });
  };

  return (
    <form onSubmit={handleSubmit(loginSubmitHandler)}>
      <FormShared data={formStructure} register={register} errors={errors} />
      <ButtonComponent block size={XL} color={PRIMARY}>
        Register
      </ButtonComponent>

      <ToastShared />
      {isLoading === true && <Loader />}
    </form>
  );
};

export default Register;
