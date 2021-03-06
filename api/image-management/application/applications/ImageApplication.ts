import express from "express";
import cookieParser from "cookie-parser";
import ImageRepository from "../../infrastructure/repository/ImageRepository";
import CreateImage from "../../domain/image/dtos/CreateImage";
import IIMageApplication from "../application.contracts/image/IImageApplication";
import ResponseHandler from "../../../0-framework/response-handler";
import S3Uploader from "../../../0-framework/s3-uploader";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import UserRepository from "../../../user-management/infrastructure/repository/UserRepository";

const app = express();

app.use(cookieParser());

class ImageApplication extends S3Uploader implements IIMageApplication {
  private _repo: ImageRepository;
  private _userRepo: UserRepository;
  private _responseHandler: ResponseHandler;

  abrAravanEndpoint: string = "https://s3.ir-thr-at1.arvanstorage.com";

  constructor() {
    super();
    this._repo = new ImageRepository();
    this._responseHandler = new ResponseHandler();
    this._userRepo = new UserRepository();
  }

  async list(req: express.Request, res: express.Response) {
    try {
      const itemsToShow = [
        "userId",
        "title",
        "likes",
        "linkes",
        "downloads",
        "alt",
        "path",
        "user",
      ];

      const result = await this._repo.list(itemsToShow);

      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      this._responseHandler.Ok(res, "Ok", result);
    } catch (error) {
      console.log(error);
      return this._responseHandler.BadRequest(res, "Bad Request");
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const imageData: CreateImage = req.body;

      // Store image data in Db
      const result = await this._repo.create(imageData);

      // Validate if there is no result
      if (!result) {
        this._responseHandler.BadRequest(res, "Bad Request");
      }

      // Send data to client
      this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      console.log(err);
    }
  }

  update: (_id: string, data: any) => Promise<any>;

  async getRelated(req: express.Request, res: express.Response): Promise<any> {
    const { tags } = req.body;

    if (!tags) {
      return this._responseHandler.BadRequest(res, "Tags are required");
    }

    try {
      const result = await this._repo.getRelated(tags);
      if (!result) {
        return this._responseHandler.NotFound(res, "No images");
      }

      return this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      console.log(err);
    }
  }

  async getListByUsername(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    const { username } = req.params;

    if (!username) {
      return this._responseHandler.BadRequest(res, "Bad Requst");
    }

    try {
      const result = await this._repo.getListByUsername(username);

      if (!result) {
        return this._responseHandler.NotFound(res, "Not Found");
      }

      return this._responseHandler.Ok(res, "Ok", result, result.length);
    } catch (err) {
      console.log(err);
      return this._responseHandler.NotFound(res, "Not Found");
    }
  }

  async getById(req: express.Request, res: express.Response) {
    const imageId = req.params.imageId;

    if (!imageId) {
      this._responseHandler.BadRequest(res, "_id is missed");
    }

    try {
      const result = await this._repo.getById(imageId);

      if (!result) {
        return this._responseHandler.NotFound(res, "No Image Here");
      }
      this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      return this._responseHandler.BadRequest(res, "Something bad happend");
    }
  }

  async Upload(req: any, res: any) {
    try {
      if (req.files && req.files.main_file !== null) {
        const imageStorageId = uuidv4();
        let date = new Date();

        let resizedDownloadableImage = await sharp(req.files.main_file.data)
          .toFormat("jpeg")
          .jpeg({ quality: 100 });

        let resizedShowableImage = await sharp(req.files.main_file.data)
          .toFormat("jpeg")
          .jpeg({ quality: 55 });

        let imageName = `${imageStorageId}-${date.getMilliseconds()}-${Math.random()}-${
          req.files.main_file.name
        }`;

        let resizedShowableImageName = `${imageStorageId}-${date.getMilliseconds()}-${Math.random()}-small-${
          req.files.main_file.name
        }`;

        let tagItems = req.body.tags.split(",");

        const imageDataToSave: CreateImage = {
          userId: req.body.userId.trim(),
          title: req.body.title.trim(),
          description: req.body.description.trim(),
          alt: req.body.alt.trim(),
          color: req.body.color.trim(),
          tags: tagItems,
          user: {
            username: req.body.username.trim(),
            profile: req.body.profile.trim(),
          },
          linkes: {
            download_link: `https://imagepicker.s3.ir-thr-at1.arvanstorage.com/${imageName}`,
            path: `https://imagepicker.s3.ir-thr-at1.arvanstorage.com/${resizedShowableImageName}`,
          },
          location: {
            country: req.body.country.trim(),
            city: req.body.city.trim(),
          },
        };
        await this.UploadImage(res, resizedDownloadableImage, imageName);
        await this.UploadImage(
          res,
          resizedShowableImage,
          resizedShowableImageName
        );
        const result = await this._repo.create(imageDataToSave);

        const shotOwnerResult = await this._userRepo.getById(req.body.userId);

        await this._userRepo.update(req.body.userId, {
          images: shotOwnerResult.images + 1,
        });

        if (!result) {
          return this._responseHandler.BadRequest(
            res,
            "Something bad happened"
          );
        }
        return this._responseHandler.Ok(
          res,
          "Image Submited Successfully",
          result
        );
      }
    } catch (err) {
      console.log(err);
      return res.json({ status: 400, error: err });
    }
  }

  async search(req: express.Request, res: express.Response) {
    const { tags } = req.body;

    if (!tags) {
      return this._responseHandler.BadRequest(res, "Tags are required");
    }

    try {
      const result = await this._repo.getRelated(tags);
      if (!result) {
        return this._responseHandler.NotFound(res, "No images");
      }

      return this._responseHandler.Ok(res, "Ok", result);
    } catch (err) {
      console.log(err);
    }
  }

  async getIds(req: express.Request, res: express.Response) {
    try {
      const result = await this._repo.getIds();

      if (!result) {
        return this._responseHandler.BadRequest(res, "Bad Request");
      }

      this._responseHandler.Ok(res, "Ok", result);
    } catch (error) {
      return this._responseHandler.NotFound(res, "Not Found");
    }
  }

  delete: (_id: string) => Promise<any>;
}

export default ImageApplication;
