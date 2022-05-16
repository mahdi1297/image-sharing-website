import express from "express";

export default interface IUserApplication {
  register: (req: express.Request, res: express.Response) => Promise<any>;
  login: (req: express.Request, res: express.Response) => Promise<any>;
  update: (req: express.Request, res: express.Response) => Promise<any>;
  remove: (req: express.Request, res: express.Response) => Promise<any>;
  refactor: (req: express.Request, res: express.Response) => Promise<any>;
}
