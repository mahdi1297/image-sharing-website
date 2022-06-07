import jwt from "jsonwebtoken";

export const Signjwt = (ident: string) => {
  const time = Date.now();
  return jwt.sign(
    { identity: ident, date: time },
    process.env.JWT_SECRET_KEY || "",
    {
      expiresIn: "1y",
      algorithm: "HS256",
    }
  );
};
