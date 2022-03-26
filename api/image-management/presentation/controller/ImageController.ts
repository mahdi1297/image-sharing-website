import ImageApplication from "../../application/applications/ImageApplication";
import express from "express";

class ImageController {
  async list(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.list(req, res);
  }

  async getById(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.getById(req, res);
  }
  async getRelated(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.getRelated(req, res);
  }
  async getListByUsername(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.getListByUsername(req, res);
  }

  async create(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.create(req, res);
  }
}

export default ImageController;
