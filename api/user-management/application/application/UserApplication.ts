import express from "express";
import IUserApplication from "../application.contracts/IUserApplication";
import { v4 as uuidv4 } from "uuid";
import UserRepository from "../../infrastructure/repository/UserRepository";
import ResponseHandler from "../../../0-framework/response-handler";
import User from "../../domain/User";
import UserDto from "../../domain/dtos/UserDto";
import { Signjwt } from "../../../0-framework/middlewares/jwt";
import { UpdateUserDto } from "../../domain/dtos/UpdateUserDto";
import {
  comparePassword,
  hashPassword,
} from "./../../../0-framework/middlewares/bcrypt";

export default class UserApplication implements IUserApplication {
  private _repo: UserRepository;
  private _responseHandler: ResponseHandler;

  constructor() {
    this._repo = new UserRepository();
    this._responseHandler = new ResponseHandler();
  }

  // Register
  async register(req: express.Request, res: express.Response): Promise<any> {
    const { username, email, password } = req.body;

    try {
      const exists = await this._repo.existsBy(username, email);

      if (exists) {
        return this._responseHandler.BadRequest(
          res,
          "Username or password are not unique!"
        );
      }

      const uuid = uuidv4();

      const [hashedPass, jwt]: any = await Promise.all([
        await hashPassword(password),
        await Signjwt(uuid),
      ]);

      if (!hashPassword || !jwt) {
        return this._responseHandler.BadRequest(
          res,
          "A problem happened while logging in, please try again"
        );
      }

      const data: Partial<User> = {
        email: email,
        username: username,
        password: hashedPass,
        uuid: uuid,
        u_t: jwt,
      };

      // Submit to database
      const result = await this._repo.create(data);

      const resultObject = {
        result,
        u_t: jwt,
      };

      if (!result) {
        await this._responseHandler.BadRequest(
          res,
          "A problem happened while logging in, please try again"
        );
      }

      return this._responseHandler.Ok(
        res,
        "Account created successfully",
        resultObject
      );

      //
    } catch (err) {
      return this._responseHandler.BadRequest(
        res,
        "A problem happened while logging in, please try again"
      );
    }
  }

  async login(req: express.Request, res: express.Response): Promise<any> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return this._responseHandler.BadRequest(
          res,
          "Email and password are required"
        );
      }

      const result = await this._repo.getBy(email);

      // check password
      const checkPassword = await comparePassword(password, result.password);

      if (!result || !checkPassword) {
        return this._responseHandler.BadRequest(
          res,
          "Email or password is incorrect"
        );
      }

      let clientUserData: Partial<UserDto> = {
        u_t: result.u_t,
        uuid: result.uuid,
        username: result.username,
        email: result.email,
        profile: result.profile,
        location: result.location,
        name: result.name,
        lastname: result.lastname,
      };

      res.cookie("rememberme", "1", {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });

      //
      return this._responseHandler.Ok(
        res,
        "You loggedin successfully",
        clientUserData
      );
      //
    } catch (err) {
      return this._responseHandler.BadRequest(
        res,
        "Username or password is incorrect"
      );
    }
  }

  async update(req: express.Request, res: express.Response): Promise<any> {
    const {
      _id,
      username,
      email,
      password,
      profile,
      location,
      name,
      lastname,
      description,
    } = req.body;

    try {
      // Check _id in database
      const userExists = await this._repo.existsById(_id);

      if (!userExists) {
        return this._responseHandler.NotFound(res, "NOT_FOUND");
      }

      const userData: UpdateUserDto = {
        username,
        email,
        password,
        profile,
        location,
        description,
        name,
        lastname,
      };

      // Updata user data
      const result = await this._repo.update(_id, userData);

      if (!result) {
        return this._responseHandler.BadRequest(res, "PROBLEM_HAPPENED");
      }

      return this._responseHandler.Ok(res, "OK", result);
    } catch (err: any) {
      return this._responseHandler.BadRequest(res, "PROBLEM_HAPPENED");
    }
  }

  async getProfile(req: express.Request, res: express.Response) {
    try {
      const { username } = req.body;

      const result: any = await this._repo.getProfile(username);

      const reSettedResult = {
        createdAt: result.createdAt,
        email: result.email,
        followers: result.followers,
        followings: result.followings,
        images: result.images,
        likes: result.likes,
        profile: result.profile,
        username: result.username,
        location: result.location,
        description: result.description,
        _id: result._id,
      };

      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      return this._responseHandler.Ok(res, "Ok", reSettedResult);
    } catch (err: any) {
      return this._responseHandler.BadRequest(res, "PROBLEM_HAPPENED");
    }
  }

  async remove(req: express.Request, res: express.Response): Promise<any> {}
  async refactor(req: express.Request, res: express.Response): Promise<any> {}
}
