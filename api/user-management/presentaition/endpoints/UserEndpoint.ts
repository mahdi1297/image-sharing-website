import UserController from "../controllers/UserController";
import express from "express";

const router = express.Router();

class UserEndpoint {
  private _controller: UserController;

  constructor() {
    this._controller = new UserController();
  }

  get routers_v1() {
    router
      .post("/register", this._controller.register)
      .post("/login", this._controller.login)
      .put("/", this._controller.update)
      .post("/get-profile", this._controller.getProfile);

    return router;
  }
}

export default UserEndpoint;
