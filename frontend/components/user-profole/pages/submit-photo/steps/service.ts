import { httpPost } from "utils/http";

let URL = "http://localhost:7000/image";

export const createImage = async (data: any) => {
  const result = await httpPost(URL, data, true);

  return result;
};
