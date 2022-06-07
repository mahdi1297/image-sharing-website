import express from "express";

export default interface IUserApplication {
  register: (req: express.Request, res: express.Response) => Promise<any>;
  login: (req: express.Request, res: express.Response) => Promise<any>;
  updateCommon: (req: express.Request, res: express.Response) => Promise<any>;
  remove: (req: express.Request, res: express.Response) => Promise<any>;
  getProfile: (req: express.Request, res: express.Response) => Promise<any>;
  refactor: (req: express.Request, res: express.Response) => Promise<any>;
  getToken: (req: express.Request, res: express.Response) => Promise<any>;
  getById: (req: express.Request, res: express.Response) => Promise<any>;
}
