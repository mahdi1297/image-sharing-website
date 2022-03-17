import ImageApplication from "../../application/applications/ImageApplication";
import express from "express";

class ImageController {
  async list(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.list(req, res);
  }

  async create(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.create(req, res);
  }
}

export default ImageController;
