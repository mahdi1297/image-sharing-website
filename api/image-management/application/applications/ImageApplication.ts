import ImageRepository from "../../infrastructure/repository/ImageRepository";
import CreateImage from "../../domain/image/CreateImage";
import IIMageApplication from "../application.contracts/image/IImageApplication";
import express from "express";
import ResponseHandler from "../../../0-framework/response-handler";

class ImageApplication implements IIMageApplication {
  private _repo: ImageRepository;
  private _responseHandler: ResponseHandler;

  constructor() {
    this._repo = new ImageRepository();
    this._responseHandler = new ResponseHandler();
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

  getById: (_id: string) => Promise<any>;

  delete: (_id: string) => Promise<any>;
}

export default ImageApplication;
