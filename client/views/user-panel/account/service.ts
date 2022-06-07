import { enviroments } from "@consts/enviroments";
import { ApiPost } from "@utils/http/post";
import { httpPut } from "@utils/http/httpPut";

export const getUserData = async (_id: string, router: any) => {
  const URL = `${enviroments.API_ADDRESS}user/get-user`;

  const { result }: any = await ApiPost({
    url: URL,
    returnIfFail: true,
    dataObject: {
      _id,
    },
  });

  return result;
};

export const updateCommon = async (dataObject: any) => {
  const URL = `${enviroments.API_ADDRESS}user/update-common`;

  const result = await httpPut({
    url: URL,
    showSuccess: true,
    dataObject,
  });

  return result;
};
