import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import BaseRoutes from "./BaseRoutes";
import path from "path";
import morgan from "morgan";
import busboy from "connect-busboy";
import fileUpload from "express-fileupload";
import cors from "cors";
import winstonLogger from "./0-framework/logger/winston";
import * as dotenv from "dotenv";

const app = express();

dotenv.config({ path: __dirname + "/.env" });
dotenv.config();

// Logger - winston
winstonLogger();

app.use(express.static(path.resolve("./public")));
app.use("/public", express.static(path.resolve("./public")));

app.use(express.static("public"));

app
  .use(
    cors({
      credentials: true,
      origin: ["http://127.0.0.1:8080", "http://localhost:3000"],
      optionsSuccessStatus: 200,
    })
  )
  .use(express.json({ limit: "50mb" }))
  .use(express.urlencoded({ limit: "50mb" }))
  .use(busboy())
  .use(helmet())
  .use(fileUpload())
  .use(cookieParser())
  .use(morgan("dev"));

const route = express.Router();

route.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(new BaseRoutes().routes);

app.listen(7000, () => console.log("Api server is running on PORT 5000"));

// lloyd
// lloyd/node-memwatch
// Bikranshu/express-react-boilerplate
// zhangyuanwei/node-images
// inversify
