import { checkStatus } from "@utils/error-handler/status-checker";
import axios, { AxiosError } from "axios";
import { Props } from "./types";

export const httpGet = async ({ url, showSuccess = false }: Props) => {
  try {
    const response = await axios.get(url);

    checkStatus(response.status);

    const result = {
      result: response.data.result,
      message: response.data.message || response.statusText,
      status: response.status,
      count: response.data.count || 0,
      error: null,
    };

    return result;
  } catch (error: AxiosError | any) {
    //
    const result = {
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
