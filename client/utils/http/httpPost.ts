import { checkStatus } from "@utils/error-handler/status-checker";
import { showErrorToast, showSuccessToast } from "@utils/toast-handler";
import axios, { AxiosError } from "axios";
import { Props } from "./types";

export const httpPost = async ({
  url,
  dataObject,
  showSuccess = false,
  returnIfFail = false,
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

    if (showSuccess) {
      showSuccessToast(response.data.message);
    }

    return result;
  } catch (error: AxiosError | any) {
    if (error.response) {
      //
      const result: any = {
        result: null,
        status: error?.response?.status,
        message: null,
        count: null,
        error: error?.response?.data,
      };

      checkStatus(error?.response?.status, returnIfFail);

      showErrorToast(error?.response?.data?.message);

      return result;
    } else if (error.request) {
      alert("Request never sent");
    }
  }
};
