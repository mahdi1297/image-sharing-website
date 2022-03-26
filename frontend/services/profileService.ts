import { httpGet } from "utils/http";

export const getUserProfile = async (username: any) => {
  let URL = `http://localhost:7000/v1/image/${username}/profile`;
  const data = await httpGet(URL);

  return data?.data;
};
