import ImageRepository from "../../infrastructure/repository/ImageRepository";
import CreateImage from "../../domain/image/dtos/CreateImage";
import IIMageApplication from "../application.contracts/image/IImageApplication";
import ResponseHandler from "../../../0-framework/response-handler";
import express from "express";

class ImageApplication implements IIMageApplication {
  private _repo: ImageRepository;
  private _responseHandler: ResponseHandler;

  abrAravanEndpoint: string = "https://s3.ir-thr-at1.arvanstorage.com";

  constructor() {
    this._repo = new ImageRepository();
    this._responseHandler = new ResponseHandler();

    this.checkSBrucket();
  }

  async list(req: express.Request, res: express.Response) {
    try {
      let itemsToShow = [
        "userId",
        "title",
        "likes",
        "downloads",
        "alt",
        "path",
        "user.username",
      ];

      const result = await this._repo.list(itemsToShow);

      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      this._responseHandler.Ok(res, "Ok", result);
    } catch (error) {
      console.log(error);
      return this._responseHandler.BadRequest(res, "Bad Request");
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const imageData: CreateImage = req.body;

      // Store image data in Db
      const result = await this._repo.create(imageData);

      // Validate if there is no result
      if (!result) {
        this._responseHandler.BadRequest(res, "Bad Request");
      }

      // Send data to client
      this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      console.log(err);
    }
  }

  update: (_id: string, data: any) => Promise<any>;

  async getById(req: express.Request, res: express.Response) {
    const _id = req.params._id;

    if (!_id) {
      this._responseHandler.BadRequest(res, "_id is missed");
    }

    try {
      const result = await this._repo.getById(_id);
      console.log(result);

      if (!result) {
        this._responseHandler.NotFound(res, "No Image Here");
      }
      this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      this._responseHandler.BadRequest(res, "Bad request");
    }
  }

  delete: (_id: string) => Promise<any>;

  async checkSBrucket() {
    // const s3 = new S3Client({
    //   region: "default",
    //   endpoint: this.abrAravanEndpoint,
    //   credentials: {
    //     accessKeyId: process.env.ABR_ARAVAN_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.ABR_ARAVAN_SECRET_KEY_ID,
    //   },
    // });
    // const uploadParams = {
    //   Bucket: process.env.ABR_ARAVAN_BUCKET_NAME, // bucket name
    //   Key: "object-name", // the name of the selected file
    //   ACL: "public-read", // 'private' | 'public-read'
    //   Body: "BODY",
    // };
  }
}

export default ImageApplication;
