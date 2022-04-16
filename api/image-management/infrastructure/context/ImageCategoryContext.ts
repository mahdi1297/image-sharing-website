import mongoose from "mongoose";
import ImageCategory from "../../domain/image-category/ImageCategory";
import Context from "../../../config/context";

const Schema = mongoose.Schema;
const dbContextConnection = Context.mongooseConnection;

class ImageCategorySchema {
  static get schema() {
    var schema = new Schema({
      label: {
        type: String,
      },
      value: {
        type: String,
      },
      isRemoved: {
        type: String,
        default: "false",
      },
    });

    return schema;
  }
}

const schema = dbContextConnection.model<ImageCategory>(
  "image-categories",
  ImageCategorySchema.schema
);

export default schema;
