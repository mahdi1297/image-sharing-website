import express from "express";

export default interface IIMageApplication {
  list: (req: express.Request, res: express.Response) => Promise<any>;
  create: (req: express.Request, res: express.Response) => Promise<any>;
  update: (_id: string, data: any) => Promise<any>;
  getById: (req: express.Request, res: express.Response) => any;
  getRelated: (req: express.Request, res: express.Response) => any;
  getListByUsername: (req: express.Request, res: express.Response) => any;
  delete: (_id: string) => Promise<any>;
  search: (req: express.Request, res: express.Response) => Promise<any>;
  getIds: (req: express.Request, res: express.Response) => Promise<any>;
}
