import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@shared/button";
import Select from "@shared/select";
import FormWrapper from "@shared/form";
import { formStructure } from "./form-structure";
import { createImage, getImageCategories } from "../service";
import { categoryOptions } from "@consts/data";
import { BUTTON, SUBMIT } from "@consts/consts";
import { SubmitShotContext } from "../../context";
import UserContextStore from "context/user.context";
import { useRouter } from "next/router";
import { UserDataModel } from "models/user.model";
import { showErrorToast } from "@utils/toast-handler";

type Props = {
  setPrevWindowHandler: Function;
};

const SubmitData: React.FC<Props> = ({ setPrevWindowHandler }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();

  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState<any>([
    categoryOptions[0],
    categoryOptions[1],
  ]);

  const imageContext: any = useContext(SubmitShotContext);
  const userData: UserDataModel = useContext(UserContextStore);

  useEffect(() => {
    if (!userData) {
      router.replace("/auth/login");
      return;
    }
    getCategories();
  }, [userData, router]);

  const onSubmitShotHandler = async (data: any) => {
    if (!imageContext.data || imageContext.data.length === 0) {
      showErrorToast("You did not choose any image");
      return;
    }

    let categorieTags: any = [];

    selectedOption.forEach((item: any) => {
      categorieTags.push(item.value);
    });

    const formData = new FormData();

    formData.append("title", data.title.trim());
    formData.append("description", data.description.trim());
    formData.append("alt", data.alt.trim());
    formData.append("tags", categorieTags);
    formData.append("username", userData.data.username.trim());
    formData.append("color", data.color.trim());
    formData.append("city", data.city.trim());
    formData.append("country", data.country.trim());
    formData.append("profile", userData.data.profile.trim());
    formData.append("userId", userData.data._id.trim());
    formData.append("main_file", imageContext.data[0].file);

    const result = await createImage(formData);
    if (result === "Ok") {
      reset();
    }
  };

  const getCategories = async () => {
    const result = await getImageCategories();
    setCategories(result);
  };

  const prevStepHandler = () => {
    setPrevWindowHandler();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitShotHandler)}>
        <Select
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label="Categories"
          isSubmitted={isSubmitted}
          options={categories}
        />

        <div className="mt-30">
          <FormWrapper
            formArray={formStructure}
            register={register}
            errors={errors}
          />
        </div>

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
