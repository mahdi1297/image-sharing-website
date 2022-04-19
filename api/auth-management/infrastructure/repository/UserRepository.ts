import IUserRepository from "../../domain/IImageRepository";
import User from "../../domain/User";
import UserContext from "../context/UserContext";

export default class UserRepository implements IUserRepository {
  private _context = UserContext;

  async create(data: Partial<User>): Promise<any> {
    return await this._context.create(data);
  }

  async update(_id: string, data: Partial<User>): Promise<any> {
    return await this._context.findOneAndUpdate({ _id }, data);
  }

  async remove(_id: string): Promise<any> {
    return await this._context.findOneAndUpdate({ _id }, { isRemoved: "true" });
  }

  async refactor(_id: string): Promise<any> {
    return await this._context.findOneAndUpdate(
      { _id },
      { isRemoved: "false" }
    );
  }
}
