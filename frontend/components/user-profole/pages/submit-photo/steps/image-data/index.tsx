import { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreateImageContext from "../../context";
import dynamic from "next/dynamic";
import { CardFooter } from "shared/common/style";
import FormSharedComponent from "shared/form";
import ButtonShared from "shared/button";
import { SkeletonSingleLoaderShared } from "shared/loader";
import { formStructure } from "./formStructure";
import { createImage, getImageCategories } from "./data";
import FormData from "form-data";
import { BUTTON, DARK, PRIMARY, SUBMIT, XL } from "constaints/consts";
import { categoryOptions } from "constaints/data.const";

const SelectShared = dynamic(() => import("shared/select"), {
  ssr: false,
  loading: () => <SkeletonSingleLoaderShared />,
});

const ImageData = ({ prevWindowSetter }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  // Uploaded image data
  const imageContext: any = useContext(CreateImageContext);

  const [selectedOption, setSelectedOption] = useState<any>([
    categoryOptions[0],
    categoryOptions[1],
  ]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Get image categories
    const imageCategories = async () => {
      const imageCats = await getImageCategories();

      setCategories(imageCats.result);
    };
    imageCategories();
  }, []);

  const prevStepHandler = () => {
    prevWindowSetter();
  };

  const createImageSubmitHandler = async (data: any) => {
    if (selectedOption.length === 0 || !imageContext.images) {
      return;
    }

    let categorieTags: any = [];

    selectedOption.forEach((item: any) => {
      categorieTags.push(item.value);
    });

    let formData = new FormData();

    let formDataItems = [
      { title: data.title },
      { description: data.description },
      { alt: data.alt },
      { tags: categorieTags },
      { username: "@emahdi1297" },
      { color: data.color },
      { city: data.city },
      { country: data.country },
      {
        profile: "public/static/avatar.png",
      },
      { userId: "123456789123456789456123" },
      {
        main_file: imageContext.images[0].file,
      },
    ];

    formDataItems.forEach((fm: any) => {
      formData.append(Object.keys(fm)[0], Object.values(fm)[0]);
    });

    // Upload created image
    await createImage(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(createImageSubmitHandler)}>
        <SelectShared
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label="Categories"
          isSubmitted={isSubmitted}
          options={categories}
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
