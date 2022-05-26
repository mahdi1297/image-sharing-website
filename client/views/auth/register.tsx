import React, { useState } from "react";
import Link from "next/link";
import Button from "@shared/button";
import FormWrapper from "@shared/form";
import Spinner from "@shared/spinner";
import { useForm } from "react-hook-form";
import { registerFormStructure } from "./formStructure";
import styles from "./style.module.scss";
import { REGISTER } from "@consts/index";
import { RegisterUserModel } from "models/user.model";
import { AuthService } from "services/auth.service";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const RegisterView = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmitHandler = async (data: any) => {
    setIsLoading(true);

    const registerFormData: RegisterUserModel = {
      email: data.email,
      username: data.username,
      password: data.password,
    };

    await service.register(registerFormData).then((data) => {
      if (data.error) {
        setIsLoading(false);
        return;
      }

      const { result } = data;

      if (result.u_t) {
        cookies.set("u_t_k", result.u_t);
      }

      setTimeout(() => {
        router.push("/");
      }, 2000);
    });
  };

  return (
    <div className={styles.auth__container}>
      <div className={styles.auth_card}>
        <h1>
          <Link href="/">
            <a>ImagePicker</a>
          </Link>
        </h1>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(loginSubmitHandler)}>
          <FormWrapper
            formArray={registerFormStructure}
            register={register}
            errors={errors}
          />

          <p className={styles.have__acount}>
            You have an account? <Link href="/auth/login">login</Link>
          </p>

          <Button
            buttonType={isLoading ? "button" : "submit"}
            disabled={isLoading}
            classname="btn-primary mt-30"
            block
          >
            {isLoading ? <Spinner /> : REGISTER}
          </Button>
        </form>
      </div>
    </div>
  );
};
export default RegisterView;

const service = new AuthService();
const cookies = new Cookies();
