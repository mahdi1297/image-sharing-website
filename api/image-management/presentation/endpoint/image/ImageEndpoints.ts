import express from "express";
import ImageController from "../../controller/ImageController";

const route = express.Router();

class ImageEndpoints {
  private _controller: ImageController;

  constructor() {
    this._controller = new ImageController();
  }

  get routers_v1() {
    route
      .get("/", this._controller.list)
      .get("/:imageId/single", this._controller.getById)
      .get("/:username/profile", this._controller.getListByUsername)
      .get("/ids", this._controller.getIds)
      .post("/related", this._controller.getRelated)
      .post("/", this._controller.create)
      .post("/search", this._controller.search)
      .post("/upload", this._controller.upload);

    return route;
  }
}

export default ImageEndpoints;
