import { httpGet } from "@utils/http/httpGet";

export const getUserShots = async (username: any) => {
  let URL = `http://localhost:7000/v1/image/${username}/profile`;

  const data = await httpGet({ url: URL });

  return data?.result;
};
