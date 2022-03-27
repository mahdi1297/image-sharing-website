import { sign } from "crypto";
import React, { useState } from "react";
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

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Container className={isClicked ? "display-block-class" : ""}>
        <form onSubmit={handleSubmit(createImageSubmitHandler)}>
          <FormSharedComponent
            data={formStructure}
            register={register}
            errors={errors}
          />
          <input type="file" {...register("image")} />
          <ButtonComponent color={PRIMARY} size={XL}>
            Submit Image
          </ButtonComponent>
        </form>
      </Container>
    </div>
  );
};

export default SubmitPhoto;
