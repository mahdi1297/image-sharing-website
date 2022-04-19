import { httpPost } from "utils/http";

const URL = "http://localhost:7000/v1/image-category/search";

export const getSearches = async (args: any) => {
  const data = await httpPost(URL, { name: args }, false);

  if (!data) {
    return;
  }

  return { data };
};
