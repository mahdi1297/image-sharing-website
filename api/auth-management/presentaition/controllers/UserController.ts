import express from "express";
import UserApplication from "../../application/application/UserApplication";

export default class UserController {
  async register(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.create(req, res);
  }
}
