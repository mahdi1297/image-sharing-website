import { httpPost } from "@utils/http/httpPost";

export class ShotService {
  constructor(private url: string, private dataObject: any) {}

  async getShot() {
    const result = await httpPost({
      url: this.url,
      dataObject: this.dataObject,
    });

    return result;
  }
}
