import express from "express";
import ImageEndpoints from "./image-management/presentation/endpoint/image/ImageEndpoints";
const app = express();

class BaseRoutes {
  get routes() {
    app.use("/v1/image", new ImageEndpoints().routers_v1);
    return app;
  }
}

export default BaseRoutes;
