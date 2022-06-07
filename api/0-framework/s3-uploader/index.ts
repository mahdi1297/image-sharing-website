import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { variables } from "../../variables/variables";

export default class S3Uploader {
  async UploadImage(res: any, fileItem: any, theName: string) {
    if (!theName) {
      return;
    }

    if (!fileItem || fileItem == "undefined") return;

    const s3 = new S3Client({
      region: variables.S3.REGION,
      endpoint: variables.S3.ENDPOINT_RUL,
      credentials: {
        accessKeyId: variables.S3.ACCESSKEYID,
        secretAccessKey: variables.S3.SECRET_KEY,
      },
    });

    const uploadParams = {
      Bucket: variables.S3.BUCKET_NAME,
      Key: theName,
      ACL: variables.S3.ACL,
      Body: fileItem,
    };

    const run = async () => {
      try {
        const data = await s3.send(new PutObjectCommand(uploadParams));
        console.log("Success", data);
      } catch (err) {}
    };

    run();
  }
}
