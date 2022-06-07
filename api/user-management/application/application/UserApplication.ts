import express from "express";
import IUserApplication from "../application.contracts/IUserApplication";
import { v4 as uuidv4 } from "uuid";
import UserRepository from "../../infrastructure/repository/UserRepository";
import ResponseHandler from "../../../0-framework/response-handler";
import User from "../../domain/User";
import { Signjwt } from "../../../0-framework/middlewares/jwt";
import { UpdateUserDto } from "../../domain/dtos/UpdateUserDto";
import jwt_decode from "jwt-decode";
import {
  comparePassword,
  hashPassword,
} from "./../../../0-framework/middlewares/bcrypt";
import {
  EMAIL_PASSWORD_REQUIRED_ERROR,
  INCORRECT_EMAIL_PASSWORD_ERROR,
  LOGGING_IN_PROBLEM_ERROR,
  LOGGIN_SUCCESS_MESSAGE,
  NOT_FOUND,
  NO_USER_ERROR,
  OK,
  PROBLEM_HAPPEND,
  UNIQUE_USERNAME_PASSWORD_ERR,
  UPDATED_SUCCESSFULLY,
} from "../../../variables/consts";

type DecodedToken = {
  identity: string;
  date: Date;
  iat: Date;
  exp: Date;
};

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
          UNIQUE_USERNAME_PASSWORD_ERR
        );
      }

      const uuid = uuidv4(),
        today = new Date(),
        nextDate = new Date(today);

      nextDate.setDate(nextDate.getDate() + 365);

      const [hashedPass, jwt]: any = await Promise.all([
        await hashPassword(password),
        await Signjwt(uuid),
      ]);

      if (!hashPassword || !jwt) {
        return this._responseHandler.BadRequest(res, LOGGING_IN_PROBLEM_ERROR);
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

      if (!result) {
        await this._responseHandler.BadRequest(res, LOGGING_IN_PROBLEM_ERROR);
      }

      res
        .status(200)
        .cookie("u_t", result.u_t, {
          sameSite: "strict",
          path: "/",
          expires: nextDate,
          httpOnly: true,
          secure: true,
        })
        .json({ message: LOGGIN_SUCCESS_MESSAGE, result: {} });

      //
    } catch (err) {
      return this._responseHandler.BadRequest(res, LOGGING_IN_PROBLEM_ERROR);
    }
  }

  async login(req: express.Request, res: express.Response): Promise<any> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return this._responseHandler.BadRequest(
          res,
          EMAIL_PASSWORD_REQUIRED_ERROR
        );
      }

      const result = await this._repo.getBy(email);

      // check password
      const checkPassword = await comparePassword(password, result.password);

      if (!result || !checkPassword) {
        return this._responseHandler.BadRequest(
          res,
          INCORRECT_EMAIL_PASSWORD_ERROR
        );
      }

      const today = new Date();
      const nextDate = new Date(today);
      nextDate.setDate(nextDate.getDate() + 3);

      res
        .status(200)
        .cookie("u_t", result.u_t, {
          sameSite: "strict",
          path: "/",
          expires: nextDate,
          httpOnly: true,
          secure: true,
        })
        .json({ message: LOGGIN_SUCCESS_MESSAGE, result: {} });
    } catch (err) {
      return this._responseHandler.BadRequest(
        res,
        INCORRECT_EMAIL_PASSWORD_ERROR
      );
    }
  }

  async getById(req: express.Request, res: express.Response): Promise<any> {
    const { _id } = req.body;

    try {
      const result = await this._repo.getById(_id);

      const data = {
        username: result.username,
        email: result.email,
        profile: result.profile,
        isRemoved: result.isRemoved,
        isCompleted: result.isCompleted,
        name: result.name || "",
        lastname: result.lastname || "",
        location: result.location || "",
        description: result.description || "",
      };

      if (!result) {
        return this._responseHandler.NotFound(res, NOT_FOUND);
      }

      return this._responseHandler.Ok(res, OK, data);
    } catch (err) {
      console.log(err);
      return this._responseHandler.NotFound(res, NOT_FOUND);
    }
  }

  async updateCommon(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    const { _id, location, name, lastname, description } = req.body;

    try {
      // Check _id in database
      const userExists = await this._repo.existsById(_id);

      if (!userExists) {
        return this._responseHandler.NotFound(res, NOT_FOUND);
      }

      const userData = {
        location,
        description,
        name,
        lastname,
      };

      // Updata user data
      const result: any = await this._repo.update(_id, userData);

      if (!result) {
        return this._responseHandler.BadRequest(res, PROBLEM_HAPPEND);
      }

      if (
        result.name &&
        result.lastname &&
        result.location &&
        result.description
      ) {
        await this._repo.activate(result._id);
      }

      console.log(result);

      return this._responseHandler.Ok(res, UPDATED_SUCCESSFULLY, result);
    } catch (err: any) {
      return this._responseHandler.BadRequest(res, PROBLEM_HAPPEND);
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
        return this._responseHandler.NotFound(res, NOT_FOUND);
      }

      return this._responseHandler.Ok(res, OK, reSettedResult);
    } catch (err: any) {
      return this._responseHandler.BadRequest(res, PROBLEM_HAPPEND);
    }
  }

  async getToken(req: express.Request, res: express.Response) {
    const { u_t } = req.cookies;
    try {
      if (!u_t) {
        return res.json({ message: NO_USER_ERROR });
      }

      const decodeJwt: DecodedToken = jwt_decode(u_t);

      if (!decodeJwt.identity) {
        return res.json({ message: NO_USER_ERROR });
      }

      const getUser = await this._repo.getByUid(decodeJwt.identity);

      const userData = {
        username: getUser.username,
        _id: getUser._id,
        profile: getUser.profile,
        email: getUser.email,
      };

      return this._responseHandler.Ok(res, OK, userData);
    } catch (err) {
      return this._responseHandler.BadRequest(res, PROBLEM_HAPPEND);
    }
  }

  async remove(req: express.Request, res: express.Response): Promise<any> {}
  async refactor(req: express.Request, res: express.Response): Promise<any> {}
}
