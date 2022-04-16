import express from "express";
import ImageCategoryController from "../../controller/ImageCategoryController";

const route = express.Router();

class ImageCategoryEndpoints {
  private _controller: ImageCategoryController;

  constructor() {
    this._controller = new ImageCategoryController();
  }

  get routers_v1() {
    var controller = this._controller;

    route
      .get("/", controller.getList)
      .post("/", controller.create)
      .post("/search", controller.getSearch);

    return route;
  }
}

export default ImageCategoryEndpoints;
