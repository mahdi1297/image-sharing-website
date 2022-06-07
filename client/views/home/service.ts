import { enviroments } from "@consts/enviroments";
import { httpGet } from "@utils/http/httpGet";

const GET_IMAGES_URL = `${enviroments.API_ADDRESS}image`;

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
