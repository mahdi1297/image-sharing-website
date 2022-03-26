import express from "express";
import ImageController from "../../controller/ImageController";

const route = express.Router();

class ImageEndpoints {
  private _controller: ImageController;

  constructor() {
    this._controller = new ImageController();
  }

  get routers_v1() {
    var controller = this._controller;

    route
      .get("/", controller.list)
      .get("/:imageId/single", controller.getById)
      .get("/:username/profile", controller.getListByUsername)
      .post("/related", controller.getRelated)
      .post("/", controller.create);

    return route;
  }
}

export default ImageEndpoints;
