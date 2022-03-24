import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (plainPassword: string) => {
    return new Promise((resolve) => {
        resolve(bcrypt.hashSync(plainPassword, saltRounds));
    });
};

const comparePassword = (plainPassword: any, passwordFromDb: any) => {
    return new Promise((resolve, reject) => {
        try {
            bcrypt.compare(
                plainPassword,
                passwordFromDb,
                function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

export { hashPassword, comparePassword };
