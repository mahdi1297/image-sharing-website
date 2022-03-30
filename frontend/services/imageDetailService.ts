import axios from "axios";

// const http = new Http();

let getImageService = async function (id: string) {
  //
  const GET_IMAGE_URL = `http://localhost:7000/v1/image/${id}/single`;

  //
  const data = await axios.get(GET_IMAGE_URL);

  if (!data || data.status !== 200) {
    return;
  }

  //
  return data;
};

export default getImageService;
