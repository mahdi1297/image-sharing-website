import { httpPost } from "@utils/http/httpPost";

const GET_RELATED_IMAGES_URL = "http://localhost:7000/v1/image/related";

export async function getSearchedShots(tags: [string] | any) {
  const data = await httpPost({
    url: GET_RELATED_IMAGES_URL,
    dataObject: {
      tags: tags,
    },
  });

  return data?.result;
}
