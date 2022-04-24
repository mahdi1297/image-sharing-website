import express from "express";
import UserEndpoint from "./auth-management/presentaition/endpoints/UserEndpoint";
import ImageCategoryEndpoints from "./image-management/presentation/endpoint/image-category/ImageCategoryEndpoint";
import ImageEndpoints from "./image-management/presentation/endpoint/image/ImageEndpoints";

const app = express();

class BaseRoutes {
  get routes() {
    app.use("/v1/image", new ImageEndpoints().routers_v1);
    app.use("/v1/image-category", new ImageCategoryEndpoints().routers_v1);
    app.use("/v1/user", new UserEndpoint().routers_v1);

    return app;
  }
}

export default BaseRoutes;
