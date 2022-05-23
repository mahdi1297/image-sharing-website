import { httpPost } from "@utils/http/httpPost";

const URL = "http://localhost:7000/v1/image-category/search";

export const getSearcheItems = async (args: any) => {
  const data = await httpPost({
    url: URL,
    dataObject: { name: args },
  });

  console.log(data);

  if (!data) {
    return;
  }

  return { data };
};
