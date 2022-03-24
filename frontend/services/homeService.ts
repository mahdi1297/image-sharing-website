import axios from "axios";

const GET_IMAGES_URL = "http://localhost:7000/v1/image";

// const http = new Http();

let homeService = async function () {
  const data = await axios.get(GET_IMAGES_URL);
  return data;
};

export default homeService;
