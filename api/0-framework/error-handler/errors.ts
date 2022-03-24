/**
 * @param express.response
 * @param status
 * @param message
 * @returns
 */

const resError = (res: any, status: number, message: string) => {
    return res.status(status).json({ stats: status, message: message });
};

export { resError };
