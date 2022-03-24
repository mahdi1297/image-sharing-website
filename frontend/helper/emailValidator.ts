import { emailRegex } from "constaints/regex";

export const validateEmail = (email: string) => {
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
};
