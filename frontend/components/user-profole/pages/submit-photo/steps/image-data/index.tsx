import { useContext } from "react";
import CreateImageContext from "../../context";
import { useForm } from "react-hook-form";
import { CardFooter } from "shared/common/style";
import FormSharedComponent from "shared/form";
import ButtonShared from "shared/button";
import { formStructure } from "./formStructure";
import { BUTTON, DARK, PRIMARY, SUBMIT, XL } from "constaints/consts";
import axios from "axios";
import FormData from "form-data";

const ImageData = ({ prevWindowSetter }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageContext: any = useContext(CreateImageContext);

  console.log(imageContext?.images[0]?.file.name);

  const prevStepHandler = () => {
    prevWindowSetter();
  };

  const createImageSubmitHandler = async (data: any) => {
    if (!imageContext.images) {
      return false;
    }

    let formData = new FormData();

    formData.append("main_file", imageContext.images[0].file);

    await axios.post("http://localhost:7000/v1/image/upload", formData, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data`,
      },
    });

    // let formDataItems = [
    //   { title: data.title },
    //   { description: data.description },
    //   { alt: data.alt },
    //   {
    //     user: {
    //       username: "@emahdi1297",
    //       profile: "public/static/avatar.png",
    //     },
    //   },
    //   { userId: "123456789123456789456123" },
    //   {
    //     image: imageContext.images[0],
    //   },
    // ];

    // console.log(formDataItems);
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
          <ButtonShared color={PRIMARY} size={XL} type={SUBMIT}>
            Next
          </ButtonShared>
        </CardFooter>
      </form>
    </>
  );
};

export default ImageData;
