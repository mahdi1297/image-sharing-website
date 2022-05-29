import { httpPost } from "@utils/http/httpPost";
import { LoginUserModel, RegisterUserModel } from "models/user.model";

export class AuthService {
  TOKEN_USER_API_URL = "http://localhost:7000/v1/user";
  LOGIN_USER_API_URL = "http://localhost:7000/v1/user/login";
  REGISTER_USER_API_URL = "http://localhost:7000/v1/user/register";

  async login(userData: LoginUserModel) {
    const data = await httpPost({
      url: this.LOGIN_USER_API_URL,
      dataObject: userData,
      showSuccess: true,
    });

    return data;
  }

  async register(userData: RegisterUserModel) {
    const data = await httpPost({
      url: this.REGISTER_USER_API_URL,
      dataObject: userData,
      showSuccess: true,
    });

    return data;
  }

  async getToken() {
    const dataToSend = {};
    const data = await httpPost({
      url: this.TOKEN_USER_API_URL,
      dataObject: dataToSend,
    });

    return data;
  }
}
