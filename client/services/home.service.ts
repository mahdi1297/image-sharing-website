import { httpGet } from "@utils/http/httpGet";

export class homeService {
  GET_ALL_POSTS = "http://localhost: 5000/home";

  constructor(public pageNumber: number) {}

  async getPosts() {
    const data = await httpGet({ url: this.GET_ALL_POSTS });

    return data;
  }
}
