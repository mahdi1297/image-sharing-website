import express from "express";
import ResponseHandler from "../../../0-framework/response-handler";
import ImageCategoryRepository from "../../infrastructure/repository/ImageCategoryRepository";
import IImageCategoryApplication from "../application.contracts/image-category/IImageCategoryApplication";

export default class ImageCategoryApplication
  implements IImageCategoryApplication
{
  private _responseHandler: ResponseHandler;
  private _repo: ImageCategoryRepository;

  constructor() {
    this._repo = new ImageCategoryRepository();
    this._responseHandler = new ResponseHandler();
  }

  // Get list
  async getList(req: express.Request, res: express.Response) {
    try {
      const result = await this._repo.getList();
      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      return await this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      return this._responseHandler.BadRequest(res, "Something bad happend");
    }
  }

  // Create
  async create(req: express.Request, res: express.Response) {
    const { names } = req.body;
    try {
      const imagetCategoryData = {
        name: names,
      };
      const result = await this._repo.create(imagetCategoryData);

      console.log(result);

      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Bad Request", err });
      // return this._responseHandler.BadRequest(res, "Something bad happend");
    }
  }

  async getSearch(req: express.Request, res: express.Response) {
    const { name } = req.body;
    try {
      const result = await this._repo.getList();
    } catch (err) {}
  }

  async update(req: express.Request, res: express.Response) {}

  async search(req: express.Request, res: express.Response) {
    const { name } = req.body;

    if (!name) {
      return false;
    }

    try {
      const result = await this._repo.search(name);
      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      return await this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      return this._responseHandler.BadRequest(res, "Something bad happend");
    }
  }

  async remove(req: express.Request, res: express.Response) {}

  async refactor(req: express.Request, res: express.Response) {}
}
