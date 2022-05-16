import { UpdateUserDto } from "./dtos/UpdateUserDto";
import UserDto from "./dtos/UserDto";
import User from "./User";

export default interface IUserRepository {
  create: (data: Partial<User>) => Promise<any>;
  update: (_id: string, data: Partial<UpdateUserDto>) => Promise<UpdateUserDto>;
  remove: (_id: string) => Promise<any>;
  refactor: (_id: string) => Promise<any>;
  existsBy: (username: string, email: string) => Promise<any>;
  existsById: (_id: string) => Promise<boolean>;
  getBy: (email: string) => Promise<UserDto>;
}
