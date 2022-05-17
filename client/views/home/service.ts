import { API_URL } from "@consts/data";
import { httpGet } from "@utils/http/httpGet";

const GET_IMAGES_URL = `${API_URL}image`;

export const getImagesService = async () => {
  const data = await httpGet({
    url: GET_IMAGES_URL,
  });

  if (data.error) {
    return {
      notFound: true,
    };
  }

  return data.result;
};
