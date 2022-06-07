import { type } from "os";

export interface LoginUserModel {
  email: string;
  password: string;
}

export interface RegisterUserModel {
  username: string;
  email: string;
  password: string;
}

export type UserDataModel = {
  data: any;
};

export interface UserUpdateInitialDataModel {
  name: string;
  lastname: string;
  username: string;
  email: string;
  profile: string;
  location: string;
  isRemoved: "false" | "true";
  isCommpleted: "false" | "true";
}
