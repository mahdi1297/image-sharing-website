import express from "express";
import UserApplication from "../../application/application/UserApplication";

export default class UserController {
  async register(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.register(req, res);
  }

  async login(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.login(req, res);
  }

  async updateCommon(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.updateCommon(req, res);
  }

  async getProfile(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.getProfile(req, res);
  }

  async getToken(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.getToken(req, res);
  }

  async getById(req: express.Request, res: express.Response) {
    const _app = new UserApplication();
    await _app.getById(req, res);
  }
}
