import {
  AUTH_EMAIL_MAXlENGTH,
  AUTH_EMAIL_MINLENGTH,
  AUTH_PASSWORD_MAXLENGTH,
  AUTH_PASSWORD_MINLENGTH,
  AUTH_USERNAME_MAXLENGTH,
  EMAIL,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  LG,
  PASSWORD,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  TEXT,
} from "constaints/consts";
import {
  EMAIL_MAXLENGTH_ERROR,
  EMAIL_MINLENGTH_ERROR,
  EMAIL_PATTERN_ERROR,
  PASSWORD_MAXLENGTH_ERROR,
  PASSWORD_MINLENGTH_ERROR,
  REQUIRED_FIELD_ERROR,
} from "constaints/errors.const";
import { emailRegex } from "constaints/regex";

export const formStructure = [
  {
    id: 1,
    size: LG,
    type: TEXT,
    label: EMAIL_LABEL,
    name: EMAIL,
    placeholder: EMAIL_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: AUTH_EMAIL_MINLENGTH,
        message: EMAIL_MINLENGTH_ERROR,
      },
      maxLength: {
        value: AUTH_EMAIL_MAXlENGTH,
        message: EMAIL_MAXLENGTH_ERROR,
      },
      pattern: {
        value: emailRegex,
        message: EMAIL_PATTERN_ERROR,
      },
    },
  },
  {
    id: 2,
    size: LG,
    type: PASSWORD,
    label: PASSWORD_LABEL,
    name: PASSWORD,
    placeholder: PASSWORD_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: AUTH_PASSWORD_MINLENGTH,
        message: PASSWORD_MINLENGTH_ERROR,
      },
      maxLength: {
        value: AUTH_USERNAME_MAXLENGTH,
        message: PASSWORD_MAXLENGTH_ERROR,
      },
    },
  },
];
