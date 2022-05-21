import { checkStatus } from "@utils/error-handler/status-checker";
import axios, { AxiosError } from "axios";
import { Props } from "./types";

export const httpPost = async ({
  url,
  dataObject,
  showSuccess = false,
}: Props) => {
  try {
    const response: any = await axios.post(url, dataObject);

    checkStatus(response.status);

    const result: any = {
      result: response.data.result,
      message: response.data.message,
      status: response.data.status,
      count: response.data.count || 0,
      error: null,
    };

    return result;
  } catch (error: AxiosError | any) {
    //
    const result: any = {
      result: null,
      status: error?.response?.status | 500,
      message: null,
      count: null,
      error: error?.response?.data,
    };

    checkStatus(error?.response?.status || 500);

    return result;
  }
};
