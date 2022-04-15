export default interface IImageCategoryRepository {
  create: (name: any) => Promise<any>;
  getList: () => Promise<any>;
  getSearch: (name) => Promise<any>;
  update: (_id: string, name: string) => Promise<any>;
  remove: (_id: string) => Promise<any>;
  refactor: (_id: string) => Promise<any>;
  search: (search: any) => Promise<any>;
}
