import express from "express";
import fileUpload from "express-fileupload";
import { SUCCESS_IN_CREATE_PORTFOLIO } from "../../../blog/infrastructure/constants/constant";

const app = express();

app.use(fileUpload());

const FileUploaderHelper = async (id, image, path, res) => {
    try {
        await image.mv(`${path}-${id + "-" + image.name}`, (err: any) => {
            const data = {
                fileName: image.name,
                filePath: `${path}-${id + "-" + image.name}`,
            };
        });
    } catch (error) {
        return res
            .status(400)
            .json({ status: 400, message: SUCCESS_IN_CREATE_PORTFOLIO });
    }
};

export { FileUploaderHelper };
