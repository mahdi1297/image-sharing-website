import Button from "@shared/button";
import FormWrapper from "@shared/form";
import React from "react";
import { useForm } from "react-hook-form";
import { formStructure } from "./form-structure";
import { BUTTON, SUBMIT } from "@consts/index";

type Props = {
  setPrevWindowHandler: Function;
};

const SubmitData: React.FC<Props> = ({ setPrevWindowHandler }) => {
  // const dt = useContext(SubmitShotContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitShotHandler = (data: any) => {
    console.log(data);
  };

  const prevStepHandler = () => {
    setPrevWindowHandler();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitShotHandler)}>
        <FormWrapper
          formArray={formStructure}
          register={register}
          errors={errors}
        />

        <div className="flex justify-between">
          <Button
            buttonType={SUBMIT}
            text="Submit shot"
            classname="btn-primary mt-20"
          />

          <Button
            buttonType={BUTTON}
            text="Prev"
            classname="btn-danger-outline mt-20"
            onclick={prevStepHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SubmitData;
