import { sign } from "crypto";
import React from "react";
import { Container } from "shared/common/style";
import FormSharedComponent from "shared/form";
import { formStructure } from "./formStructure";
import { useForm } from "react-hook-form";
import ButtonComponent from "shared/button";
import { PRIMARY, XL } from "constaints/consts";

const SubmitPhoto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createImageSubmitHandler = (data: object) => {
    console.log(data);
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit(createImageSubmitHandler)}>
          <FormSharedComponent
            data={formStructure}
            register={register}
            errors={errors}
            // errors={errors?.[inp.name]}
          />
          <ButtonComponent color={PRIMARY} size={XL}>
            Submit Image
          </ButtonComponent>
        </form>
      </Container>
    </div>
  );
};

export default SubmitPhoto;
