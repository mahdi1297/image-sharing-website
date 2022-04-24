import UserController from "../controllers/UserController";
import express from "express";

const router = express.Router();

class UserEndpoint {
  private _controller: UserController;

  constructor() {
    this._controller = new UserController();
  }

  get routers_v1() {
    router.post("/register", this._controller.register);

    return router;  
  }
}

export default UserEndpoint;
