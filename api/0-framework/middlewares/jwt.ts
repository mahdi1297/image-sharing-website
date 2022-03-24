import jwt from "jsonwebtoken";

export const Signjwt = (ident: string, type: string) => {
    const time = Date.now();
    return jwt.sign(
        { identity: ident, type: type, date: time },
        process.env.JWT_SECRET_KEY || "",
        {
            expiresIn: "59m",
            algorithm: "HS256",
        }
    );
};
