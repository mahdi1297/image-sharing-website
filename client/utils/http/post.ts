import { checkStatus } from "@utils/error-handler/status-checker";
import { showErrorToast, showSuccessToast } from "@utils/toast-handler";
import { AxiosError } from "axios";
import { instance } from "./config";
import { Props } from "./types";

export const ApiPost = async ({
  url,
  dataObject,
  showSuccess = false,
  returnIfFail = false,
  Token,
}: Props) => {
  let isLoading = true;

  try {
    const response: any = await instance.post(url, dataObject);

    if (!response || response.status !== 200) {
      return;
    }

    const status = response.status || 500;
    isLoading = false;

    if (showSuccess) {
      showSuccessToast(response.data.message);
    }

    const error = null;

    const result = response.data.result;

    return { result, status, error };
  } catch (err: any) {
    //
    const error = err.response;
    const status = err.response.status;
    const result = null;

    isLoading = false;

    checkStatus(error?.response?.status, returnIfFail);

    showErrorToast(err.response.statusTextmessage);

    return { result, status, error };
  }
};
