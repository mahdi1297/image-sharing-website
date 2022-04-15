import express from "express";

export default interface IImageCategoryApplication {
  create: (req: express.Request, res: express.Response) => Promise<any>;
  getList: (req: express.Request, res: express.Response) => Promise<any>;
  getSearch: (req: express.Request, res: express.Response) => Promise<any>;
  update: (req: express.Request, res: express.Response) => Promise<any>;
  remove: (req: express.Request, res: express.Response) => Promise<any>;
  refactor: (req: express.Request, res: express.Response) => Promise<any>;
  search: (req: express.Request, res: express.Response) => Promise<any>;
}
