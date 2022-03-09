import axios, { Axios, AxiosError } from "axios";

interface HttpType {
  get(url: string, successMessage?: boolean): Promise<any>;
  post(url: string, data?: any, successMessage?: boolean): Promise<any>;
  put(url: string, data?: any, successMessage?: boolean): Promise<any>;
  delete(url: string, data?: any, successMessage?: boolean): Promise<any>;
  handleError(error: AxiosError): Promise<any>;
}

class Http implements HttpType {
  private readonly baseUrl: string = "http://localhost:8000/";

  async get(url: string, successMessage: boolean = false) {
    try {
      const result = await axios.get(`${this.baseUrl}${url}`);
      if (successMessage) {
        console.log("this must show the success alert");
      }
      return result;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async post(url: string, data: any, successMessage: boolean): Promise<any> {
    try {
      const result = await axios.post(`${this.baseUrl}${url}`, data);
      if (successMessage) {
        console.log("this must show the success alert");
      }
      return result;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async put(url: string, data: any, successMessage: boolean): Promise<any> {
    try {
      const result = await axios.put(`${this.baseUrl}${url}`, data);
      if (successMessage) {
        console.log("this must show the success alert");
      }
      return result;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async delete(
    url: string,
    data?: any,
    successMessage?: boolean
  ): Promise<any> {
    try {
      const result = await axios.delete(`${this.baseUrl}${url}`, data);
      if (successMessage) {
        console.log("this must show the success alert");
      }
      return result;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async handleError(error: AxiosError) {
    const response = error.response;
    console.log(response, error);
  }

  static {
    console.log("this is static");
  }
}

export default new Http();
