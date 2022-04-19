import express from "express";

export default interface IUserApplication {
  create: (req: express.Request, res: express.Response) => Promise<any>;
  update: (req: express.Request, res: express.Response) => Promise<any>;
  remove: (req: express.Request, res: express.Response) => Promise<any>;
  refactor: (req: express.Request, res: express.Response) => Promise<any>;
}
