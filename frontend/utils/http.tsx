import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

let baseUrl = "http://localhost:7000/v1/";

export async function httpGet(url: string, successMessage: boolean = false) {
  try {
    const result = await axios.get(`${url}`);
    if (successMessage) {
      console.log("this must show the success alert");
    }
    return result;
  } catch (error: any) {
    handleError(error);
  }
}

export async function httpPost(
  url: string,
  data: any,
  successMessage: boolean
): Promise<any> {
  try {
    const result = await axios.post(`${url}`, data);
    if (successMessage) {
      showSuccessToast(result.data.message);
    }
    return result.data;
  } catch (error: any) {
    handleError(error);
  }
}

export async function httpPut(
  url: string,
  data: any,
  successMessage: boolean
): Promise<any> {
  try {
    const result = await axios.put(`${baseUrl}${url}`, data);
    if (successMessage) {
      console.log("this must show the success alert");
    }
    return result;
  } catch (error: any) {
    handleError(error);
  }
}

async function handleError(error: AxiosError) {
  const response = error.response;
  showErrorToast(response?.data.message);
}

async function showSuccessToast(message: string) {
  toast.success(message);
}

async function showErrorToast(message: string) {
  toast.error(message);
}
