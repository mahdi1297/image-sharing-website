import { checkStatus } from "@utils/error-handler/status-checker";
import axios, { AxiosError } from "axios";
import { Props } from "./types";

export const dataObject = async ({
  url,
  showSuccess = false,
  dataObject,
}: Props) => {
  try {
    const response: any = await axios.put(url, dataObject);

    checkStatus(response.status);

    const result: any = {
      result: response.result,
      message: response.message,
      status: response.status,
      count: response.count || 0,
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
