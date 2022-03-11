import ImageRepository from "../../infrastructure/repository/ImageRepository";
import CreateImage from "../application.contracts/image/CrateImage";
import IIMageApplication from "../application.contracts/image/IImageApplication";
import express from "express";

class ImageApplication implements IIMageApplication {
  private _repo: ImageRepository;

  constructor() {
    this._repo = new ImageRepository();
  }

  async create(req: express.Request, res: express.Response) {
    const image: CreateImage = {
      phoserId: "string",
      title: "string",
      description: "string",
      alt: "string",
      color: "string",
      tags: [{ detail: "string" }],
      user: {
        username: "string",
        profile: "string",
      },
      linkes: {
        download_link: "string",
        path: "string",
      },
      location: {
        country: "string",
        city: "string",
      },
    };

    try {
      const result = await this._repo.create(image);
      console.log(result);

      res.json({ message: "Ok", result });
    } catch (err) {
      console.log(err);
    }
  }

  update: (_id: string, data: any) => Promise<any>;

  getById: (_id: string) => Promise<any>;

  delete: (_id: string) => Promise<any>;
}

export default ImageApplication;
