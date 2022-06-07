import { httpGet } from "@utils/http/httpGet";
import { instance } from "@utils/http/config";
import { showErrorToast, showSuccessToast } from "@utils/toast-handler";
import { enviroments } from "@consts/enviroments";

const getImageCategories = async () => {
  const URL = `${enviroments.API_ADDRESS}image-category`;

  const data = await httpGet({ url: URL });

  if (!data) {
    return false;
  }

  return data.result;
};

const createImage = async (formData: any) => {
  const URL = `${enviroments.API_ADDRESS}image/upload`;

  try {
    const result = await instance.post(URL, formData, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data`,
      },
    });
    console.log(result);
    showSuccessToast(result.data.message);
    return "Ok";
  } catch (err) {
    showErrorToast("Something wrong happened");
    return "Error";
  }
};

export { getImageCategories, createImage };
