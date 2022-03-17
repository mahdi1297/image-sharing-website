import express from "express";

export default interface IIMageApplication {
  list: (req: express.Request, res: express.Response) => Promise<any>;
  create: (req: express.Request, res: express.Response) => Promise<any>;
  update: (_id: string, data: any) => Promise<any>;
  getById: (_id: string) => Promise<any>;
  delete: (_id: string) => Promise<any>;
}
