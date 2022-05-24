export default interface User {
  u_t: string;
  uuid: string;
  username: string;
  email: string;
  password: string;
  description: string;
  followers: string[];
  followings: string[];
  likes: number;
  images: number;
  profile: string;
  location: string;
  name: string;
  lastname: string;
  isRemoved: string;
  isCompleted: string;
}
