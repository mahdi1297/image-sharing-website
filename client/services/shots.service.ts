import { httpGet } from "@utils/http/httpGet";
import { ShotModel } from "models/shot.model";

export class ShotService {
  private GET_SHOTS_LENGTH_URL = "http://localhost:7000/v1/image/ids";

  async getShotLenght() {
    const result = await httpGet({
      url: this.GET_SHOTS_LENGTH_URL,
    });

    return result;
  }

  async getShot(id: string) {
    const GET_IMAGE_URL = `http://localhost:7000/v1/image/${id}/single`;

    const result = await httpGet({
      url: GET_IMAGE_URL,
    });

    if (result.error) {
      return;
    }

    const data: ShotModel = result.result;

    return data;
  }
}
