import CreateImage from "./CreateImage";

export default interface IImageRepository {
  create: (data: CreateImage) => Promise<any>;
  update: (_id: string, data: any) => Promise<any>;
  getById: (_id: string) => Promise<any>;
  delete: (_id: string) => Promise<any>;
}
