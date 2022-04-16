import ImageCategoryApplication from "../../application/applications/ImageCategoryApplication";
import express from "express";

export default class ImageCategoryController {
  async getList(req: express.Request, res: express.Response) {
    const _app = new ImageCategoryApplication();
    await _app.getList(req, res);
  }

  async create(req: express.Request, res: express.Response) {
    const _app = new ImageCategoryApplication();
    await _app.create(req, res);
  }

  async getSearch(req: express.Request, res: express.Response) {
    const _app = new ImageCategoryApplication();
    await _app.getSearch(req, res);
  }
}
