import express from "express";
import IUserApplication from "../application.contracts/IUserApplication";
import { v4 as uuidv4 } from "uuid";
import UserRepository from "../../infrastructure/repository/UserRepository";
import ResponseHandler from "../../../0-framework/response-handler";
import User from "../../domain/User";
import { hashPassword } from "./../../../0-framework/middlewares/bcrypt";
import { Signjwt } from "../../../0-framework/middlewares/jwt";

export default class UserApplication implements IUserApplication {
  private _repo: UserRepository;
  private _responseHandler: ResponseHandler;

  constructor() {
    this._repo = new UserRepository();
    this._responseHandler = new ResponseHandler();
  }

  // Register
  async create(req: express.Request, res: express.Response): Promise<any> {
    try {
      // Hash password
      const hashedPass: any = await hashPassword(req.body.password);

      if (!hashPassword) {
        return this._responseHandler.BadRequest(res, "could not hash password");
      }

      const uuid = uuidv4();

      // Create token
      const jwt = await Signjwt(uuid);

      if (!jwt) {
        return this._responseHandler.BadRequest(res, "could not create jwt");
      }

      const data: Partial<User> = {
        email: req.body.email,
        username: req.body.username,
        password: hashedPass,
        uuid: uuid,
        u_t: jwt,
      };

      // Submit to database
      const result = await this._repo.create(data);

      if (!result) {
        await this._responseHandler.BadRequest(res, "Bad Requset");
      }

      return this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      return this._responseHandler.BadRequest(res, "Bad Request");
    }
  }

  async update(req: express.Request, res: express.Response): Promise<any> {}
  async remove(req: express.Request, res: express.Response): Promise<any> {}
  async refactor(req: express.Request, res: express.Response): Promise<any> {}
}
