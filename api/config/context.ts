import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { variables } from "../variables/variables";
dotenv.config({ path: __dirname + "./../.env" });

class Context {
  static mongooseInstance: any;
  static mongooseConnection: mongoose.Connection;

  constructor() {
    Context.connect();
  }

  static connect(): mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection = mongoose.connection;
    this.mongooseConnection.once("open", () => {
      console.log("connected to db successfully");
    });
    this.mongooseInstance = mongoose.connect(
      `${variables.mongoose.CONNECTION_STRING}`
    );
    return this.mongooseInstance;
  }
}

Context.connect();
export default Context;
