import { httpPost } from "@utils/http/httpPost";

export class ProfileService {
  async getProfile(username: string) {
    const URL = `http://localhost:7000/v1/user/get-profile`;

    const result: any = await httpPost({
      url: URL,
      dataObject: {
        username,
      },
    });

    console.log(result);

    if (result.error) {
      return {
        NotFound: true,
      };
    }

    return result;
  }
}
