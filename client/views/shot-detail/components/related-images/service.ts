import { httpPost } from "@utils/http/httpPost";

let GET_RELATED_IMAGES_URL = "http://localhost:7000/v1/image/related";

export async function getRelatedImages(tags: any) {
  const data = await httpPost({
    url: GET_RELATED_IMAGES_URL,
    dataObject: { tags },
  });

  if (data.error) {
    return {};
  }

  return data?.result;
}
