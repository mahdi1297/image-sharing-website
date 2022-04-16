import axios from "axios";
import { httpGet } from "utils/http";

const URL = "http://localhost:7000/v1/image-category";
const CREAET_IMAGE_URL = "http://localhost:7000/v1/image/upload";

const getImageCategories = async () => {
  const result = await httpGet(URL, false);

  if (!result) {
    return false;
  }

  return result.data;
};

const createImage = async (formData: any) => {
  try {
    await axios.post(CREAET_IMAGE_URL, formData, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data`,
      },
    });
    alert("Uploaded Successfully");
  } catch (err) {
    alert("Something wrong happened");
  }
};

export { getImageCategories, createImage };
