/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Alert from "@shared/alert";
import { MultiSkeletonLoader } from "@shared/loader";
import { getUserData, updateCommon } from "./service";
import { INACTIVE_ACCOUNT_ERROR, SUBMIT } from "@consts/consts";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import FormWrapper from "@shared/form";
import { formStructure } from "./form-structure";
import Button from "@shared/button";

type Props = {
  userAuthData: any;
};

const UserPanelAccount: React.FC<Props> = ({ userAuthData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [completedAccount, setIsCompletedAccount] = useState("false");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getUserInitialData();
  }, [userAuthData._id]);

  const getUserInitialData = async () => {
    if (userAuthData._id) {
      const result: any = await getUserData(userAuthData._id, router);

      if (result) {
        setIsCompletedAccount(result.isCompleted);

        const inputValueSetter = () => {
          setValue("name", result.name);
          setValue("lastname", result.lastname);
          setValue("location", result.location);
          setValue("description", result.description);
        };

        inputValueSetter();
      }
    }
  };

  if (!userAuthData) {
    return <MultiSkeletonLoader />;
  }

  const updateUserDataSubmitHandler = async (data: any) => {
    setIsLoading(true);
    const formData = {
      _id: userAuthData._id,
      ...data,
    };

    await updateCommon(formData);
    await getUserInitialData();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {completedAccount === "false" && (
        <div className="mb-30">
          <Alert classname="" message={INACTIVE_ACCOUNT_ERROR} />
        </div>
      )}
      <>
        <div className="mb-30">
          <form onSubmit={handleSubmit(updateUserDataSubmitHandler)}>
            <h3>Update your common data</h3>
            <FormWrapper
              formArray={formStructure}
              register={register}
              errors={errors}
            />
            <Button
              buttonType={SUBMIT}
              text="Update"
              classname="btn-success"
              isLoading={isLoading}
              disabled={isLoading}
            />
          </form>
        </div>
      </>
    </>
  );
};

export default UserPanelAccount;
