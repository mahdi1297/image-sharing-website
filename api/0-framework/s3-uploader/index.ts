import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
// import path from "path";

export default class S3Uploader {
  async UploadImage(res: any, fileItem: any, theName: string) {
    // const s3 = this.S3Auth();

    // console.log(theName);
    // console.log(fileItem.filename);

    if (!theName) {
      return;
    }

    if (!fileItem || fileItem == "undefined") return;

    const s3 = new S3Client({
      region: "default",
      endpoint: "https://s3.ir-thr-at1.arvanstorage.com",
      credentials: {
        accessKeyId: "8cf4319a-032e-4099-8dbc-4f9fc844d5a2",
        secretAccessKey:
          "85a34f59b7c9a6b01a917e271b96e258cb556026d09d671f0a650520cab4fd30",
      },
    });

    const uploadParams = {
      Bucket: "imagepicker", // bucket name
      Key: theName, // the name of the selected file
      ACL: "public-read", // 'private' | 'public-read'
      Body: fileItem,
    };

    const run = async () => {
      try {
        const data = await s3.send(new PutObjectCommand(uploadParams));
        console.log("Success", data);
      } catch (err) {
        return res.json({
          status: 400,
          error: "Problem happend while uploading image",
        });
      }
    };

    try {
      run();
      return "ok";
    } catch (err) {
      return "false";
    }
  }
}

// Copy
// // Import required AWS SDK clients and commands for Node.js
// const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
// const { S3RequestPresigner } = require('@aws-sdk/s3-request-presigner');
// const { createRequest } = require('@aws-sdk/util-create-request');
// const { formatUrl } = require('@aws-sdk/util-format-url');

// // Create an S3 client service object
// const s3 = new S3Client({
//     region: 'default',
//     endpoint: 'endpoint_url',
//     forcePathStyle: false,
//     credentials: {
//         accessKeyId: 'access_key',
//         secretAccessKey: 'secret_key',
//     },
// });

// const clientParams = {
//     Bucket: 'sample_bucket',
//     Key: 'file.png',
// };

// const signedRequest = new S3RequestPresigner(s3.config);

// const run = async () => {
//     try {
//         // Create request
//         const request = await createRequest(
//             s3,
//             // new GetObjectCommand(clientParams)
//             new GetObjectCommand(clientParams)
//         );
//         // Create and format presigned URL
//         const signedUrl = formatUrl(
//             await signedRequest.presign(request, {
//                 // Supply expiration in second
//                 expiresIn: 60 * 60 * 24,
//             })
//         );
//         console.log(`download url: ${signedUrl}`);
//     } catch (err) {
//         console.log('Error creating presigned URL', err);
//     }
// };
// run();
