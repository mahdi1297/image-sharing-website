import CreateImage from "./dtos/CreateImage";

export default interface IImageRepository {
  list: (itemsToShow: any) => Promise<any>;
  getListByUsername: (username: string) => Promise<any>;
  create: (data: CreateImage) => Promise<any>;
  update: (_id: string, data: any) => Promise<any>;
  getById: (_id: string) => Promise<any>;
  delete: (_id: string) => Promise<any>;
  getRelated: (tags: any) => Promise<any>;
  search: (tags: any) => Promise<any>;
  getCategories: (items: any) => Promise<any>;
  getIds: () => Promise<any>;
}
