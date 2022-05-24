import mongoose from "mongoose";
import Context from "../../../config/context";
import User from "../../domain/User";

const Schema = mongoose.Schema;
const dbContextConnection = Context.mongooseConnection;

class UserSchema {
  static get schema() {
    const schema = new Schema(
      {
        u_t: {
          type: String,
        },
        uuid: {
          type: String,
        },
        username: {
          type: String,
        },
        email: {
          type: String,
        },
        password: {
          type: String,
        },
        description: {
          type: String,
        },
        followers: {
          type: Array,
        },
        followings: {
          type: Array,
        },
        likes: {
          type: Number,
          default: 0,
        },
        images: {
          type: Number,
          default: 0,
        },
        profile: {
          type: String,
          default: "www.w3schools.com/howto/img_avatar.png",
        },
        location: {
          type: String,
        },
        name: {
          type: String,
        },
        lastname: {
          type: String,
        },
        isRemoved: {
          type: String,
          default: "false",
        },
        isCommpleted: {
          type: String,
          default: "false",
        },
      },
      { timestamps: true }
    );

    return schema;
  }
}

const schema = dbContextConnection.model<User>("users", UserSchema.schema);
export default schema;
