import { UpdateUserDto } from "../../domain/dtos/UpdateUserDto";
import UserDto from "../../domain/dtos/UserDto";
import IUserRepository from "../../domain/IImageRepository";
import User from "../../domain/User";
import UserContext from "../context/UserContext";

export default class UserRepository implements IUserRepository {
  private _context = UserContext;

  async create(data: Partial<User>): Promise<any> {
    return await this._context.create(data);
  }

  async update(
    _id: string,
    data: Partial<UpdateUserDto>
  ): Promise<UpdateUserDto> {
    return await this._context.findOneAndUpdate({ _id }, data);
  }

  async getBy(email: string): Promise<UserDto> {
    return await this._context.findOne({ email }).lean();
  }

  async getByUid(identity: string) {
    return await this._context.findOne({ uuid: identity });
  }

  async getById(_id: string) {
    return await this._context.findOne({ _id }).lean();
  }

  async existsBy(username: string, email: string): Promise<any> {
    return await this._context.exists({
      $or: [
        {
          username: username,
        },
        {
          email: email,
        },
      ],
    });
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

  async getProfile(username: string) {
    return await this._context.findOne({ "user.username": username });
  }

  async existsById(_id: string): Promise<boolean> {
    return await this._context.exists({ _id });
  }

  async activate(_id: string): Promise<any> {
    return await this._context.findByIdAndUpdate(
      { _id },
      { isCompleted: "true" }
    );
  }
}
