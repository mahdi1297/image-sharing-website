import { httpPost } from "utils/http";
import { UserData } from "./model";

const REGISTER_URL = "http://localhost:7000/v1/user/register";

const registerUser = async (userData: UserData) => {
  return new Promise(async (resolve, reject) => {
    const data = await httpPost(REGISTER_URL, userData, true);

    if (!data || data.status !== 200) {
      reject(data);
    }

    resolve(data);
  });
};

export { registerUser };
