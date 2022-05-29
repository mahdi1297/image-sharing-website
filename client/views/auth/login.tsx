import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@shared/button";
import FormWrapper from "@shared/form";
import Spinner from "@shared/spinner";
import { useForm } from "react-hook-form";
import { AuthService } from "services/auth.service";
import { loginFormStructure } from "./formStructure";
import styles from "./style.module.scss";
import { LOGIN } from "@consts/index";
import { LoginUserModel } from "models/user.model";

export const LoginView = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmitHandler = async (data: any) => {
    setIsLoading(true);

    const loginData: LoginUserModel = {
      email: data.email,
      password: data.password,
    };

    await service
      .login(loginData)
      .then(() => {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch(() => {
        setIsLoading(false);
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit(loginSubmitHandler)}>
          <FormWrapper
            formArray={loginFormStructure}
            register={register}
            errors={errors}
          />

          <p className={styles.have__acount}>
            Not our member yet?{" "}
            <Link href="/auth/register">Create account</Link>
          </p>

          <Button
            buttonType={isLoading ? "button" : "submit"}
            disabled={isLoading}
            classname="btn-primary mt-30"
            block
          >
            {isLoading ? <Spinner /> : LOGIN}
          </Button>
        </form>
      </div>
    </div>
  );
};

const service = new AuthService();
