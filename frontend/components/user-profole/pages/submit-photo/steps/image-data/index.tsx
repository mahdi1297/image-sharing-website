import { useContext } from "react";
import CreateImageContext from "../../context";
import { useForm } from "react-hook-form";
import { CardFooter } from "shared/common/style";
import FormSharedComponent from "shared/form";
import ButtonShared from "shared/button";
import { formStructure } from "./formStructure";
import { BUTTON, DARK, PRIMARY, SUBMIT, XL } from "constaints/consts";

const ImageData = ({ prevWindowSetter }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const imageContext: any = useContext(CreateImageContext);

  const prevStepHandler = () => {
    prevWindowSetter();
  };

  const createImageSubmitHandler = (data: any) => {
    if (!imageContext.images) {
      return false;
    }
    console.log(data);
    console.log(imageContext.images);
  };

  return (
    <>
      <form onSubmit={handleSubmit(createImageSubmitHandler)}>
        <FormSharedComponent
          data={formStructure}
          register={register}
          errors={errors}
        />
        <CardFooter>
          <ButtonShared
            color={DARK}
            size={XL}
            onclick={prevStepHandler}
            type={BUTTON}
          >
            Prev
          </ButtonShared>
          <ButtonShared
            color={PRIMARY}
            size={XL}
            type={SUBMIT}
            disabled={isValid === false ? true : false}
          >
            Next
          </ButtonShared>
        </CardFooter>
      </form>
    </>
  );
};

export default ImageData;
