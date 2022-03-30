import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import CreateImageContext from "../../context";
import { useForm } from "react-hook-form";
import { CardFooter } from "shared/common/style";
import FormSharedComponent from "shared/form";
import ButtonShared from "shared/button";
import { formStructure } from "./formStructure";
import { BUTTON, DARK, PRIMARY, SUBMIT, XL } from "constaints/consts";
import axios from "axios";
import FormData from "form-data";
import { categoryOptions } from "constaints/data.const";

const SelectShared = dynamic(() => import("shared/select"), {
  ssr: false,
  loading: () => <h1>Loading....</h1>,
});

const ImageData = ({ prevWindowSetter }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const imageContext: any = useContext(CreateImageContext);

  const [selectedOption, setSelectedOption] = useState<any>([
    categoryOptions[0],
    categoryOptions[1],
  ]);

  const prevStepHandler = () => {
    prevWindowSetter();
  };

  const createImageSubmitHandler = async (data: any) => {
    if (selectedOption.length === 0 || !imageContext.images) {
      return;
    }


    // let formData = new FormData();

    // formData.append("main_file", imageContext.images[0].file);

    // await axios.post("http://localhost:7000/v1/image/upload", formData, {
    //   headers: {
    //     accept: "application/json",
    //     "Accept-Language": "en-US,en;q=0.8",
    //     "Content-Type": `multipart/form-data`,
    //   },
    // });

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
        <SelectShared
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label="Categories"
          isSubmitted={isSubmitted}
        />

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
