import CreateImage from "../../application/application.contracts/image/CrateImage";

export default interface IImageRepository {
  create: (data: CreateImage) => Promise<any>;
  update: (_id: string, data: any) => Promise<any>;
  getById: (_id: string) => Promise<any>;
  delete: (_id: string) => Promise<any>;
}
