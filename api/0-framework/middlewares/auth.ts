import express from "express";
import UserRepository from "../../user/infrastructure/repository/UserRepository";
import { resError } from "../error-handler/errors";
import jwt_decode from "jwt-decode";

interface IToken {
    identity: string;
    type: string;
    date: any;
    iat: any;
    exp: any;
}

async function AuthMiddleware(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const { username, email } = req.body;

    const _userRepo = new UserRepository();

    try {
        const existsUser = await _userRepo.checkUser({
            $or: [
                {
                    username: req.body.username,
                },
                {
                    email: req.body.email,
                },
            ],
        });
        if (existsUser) {
            const adminUser = await _userRepo.get({
                username: username,
                email: email,
            });

            if (!adminUser) {
                return resError(res, 401, "کاربری یافت نشد");
            } else {
                if (adminUser.role !== "admin") {
                    return resError(res, 401, "کاربری یافت نشد");
                } else {
                    next();
                }
            }
        }
    } catch (err) {
        return resError(res, 401, "کاربری یافت نشد");
    }
}

async function AuthTokenMiddleware(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const _userRepo = new UserRepository();
    const token = req.headers.authorization;
    try {
        if (!token) {
            return resError(res, 401, "شما دسترسی لازم را ندارید");
        }

        const decodedToken: IToken = jwt_decode(token);

        const _id = decodedToken.identity;

        const result = await _userRepo.get({ _id: _id });

        if (!result) {
            return resError(res, 401, "شما دسترسی لازم را ندارید");
        } else {
            if (result.role !== "admin") {
                return resError(res, 401, "شما دسترسی لازم را ندارید");
            } else {
                next();
            }
        }
    } catch (err) {
        return resError(res, 400, "مشکلی به وجود آمده");
    }
}

export { AuthMiddleware, AuthTokenMiddleware };
