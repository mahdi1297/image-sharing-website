import { httpPost } from "utils/http";

let GET_RELATED_IMAGES_URL = "http://localhost:7000/v1/image/related";

export async function getRelatedImages(tags: any) {
  console.log(tags);
  const data = await httpPost(
    GET_RELATED_IMAGES_URL,
    {
      tags: tags,
    },
    false
  );

  return data.result;
}
