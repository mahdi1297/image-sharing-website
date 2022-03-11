import ImageApplication from "../../application/applications/ImageApplication";
import express from "express";

class ImageController {
  async create(req: express.Request, res: express.Response) {
    const _app = new ImageApplication();
    await _app.create(req, res);
  }
}

export default ImageController;
