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

    route.post("/", controller.create);

    return route;
  }
}

export default ImageCategoryEndpoints;
