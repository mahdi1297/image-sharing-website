import mongoose from "mongoose";
import Image from "../../domain/image/Image";
import Context from "../../../config/context";

var Schema = mongoose.Schema;
var mongooseConnection = Context.mongooseConnection;

class ImageScehma {
  static get schema() {
    var schema = new Schema(
      {
        userId: {
          type: String,
        },
        downloads: {
          type: Number,
          default: 0,
        },
        likes: {
          type: Number,
          default: 0,
        },
        title: {
          type: String,
        },
        alt: {
          type: String,
        },
        description: {
          type: String,
        },
        color: {
          type: String,
        },
        updatedAt: {
          type: String,
        },
        isConfirmed: {
          type: String,
          default: "true",
        },
        isBanned: {
          type: String,
          default: "false",
        },
        tags: {
          type: Array,
        },
        reports: {
          type: [],
        },
        user: {
          username: {
            type: String,
          },
          profile: {
            type: String,
            default: "public/static/avatar.png",
          },
        },
        linkes: {
          download_link: {
            type: String,
            required: true,
          },
          path: {
            type: String,
            required: true,
          },
        },
        location: {
          country: {
            type: String,
          },
          city: {
            type: String,
          },
        },
      },
      { timestamps: true }
    );
    return schema;
  }
}

let schema = mongooseConnection.model<Image>("images", ImageScehma.schema);
export default schema;
