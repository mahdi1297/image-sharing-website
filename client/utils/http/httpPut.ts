import { checkStatus } from "@utils/error-handler/status-checker";
import axios, { AxiosError } from "axios";
import { Props, Response } from "./types";

export const dataObject = async ({
  url,
  showSuccess = false,
  dataObject,
}: Props) => {
  try {
    const response: Response = await axios.put(url, dataObject);

    checkStatus(response.status);

    const result: Response = {
      result: response.result,
      message: response.message,
      status: response.status,
      count: response.count || 0,
      error: null,
    };

    return result;
  } catch (error: AxiosError | any) {
    //
    const result: Response = {
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
