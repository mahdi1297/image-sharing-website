import User from "./User";

export default interface IUserRepository {
  create: (data: Partial<User>) => Promise<any>;
  update: (_id: string, data: Partial<User>) => Promise<any>;
  remove: (_id: string) => Promise<any>;
  refactor: (_id: string) => Promise<any>;
}
