export const variables = {
  S3: {
    ACCESSKEYID: "8cf4319a-032e-4099-8dbc-4f9fc844d5a2",
    SECRET_KEY:
      "85a34f59b7c9a6b01a917e271b96e258cb556026d09d671f0a650520cab4fd30",
    ENDPOINT_RUL: "https://s3.ir-thr-at1.arvanstorage.com",
    REGION: "default",
    BUCKET_NAME: "imagepicker",
    ACL: "public-read",
  },
  mongoose: {
    CONNECTION_STRING: "mongodb://localhost:27017/image_picker",
  },
  cors: {
    origins: ["http://127.0.0.1:8080", "http://localhost:3000"],
  },
};
