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
import { MINLENGTH_FIELD_ERROR, REQUIRED_FIELD_ERROR } from "constaints/errors.const";
import { emailRegex } from "constaints/regex";

export const formStructure = [
  {
    id: 1,
    size: LG,
    type: TEXT,
    label: EMAIL_LABEL,
    name: EMAIL,
    placeholder: EMAIL_PLACEHOLDER,
    validators: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: AUTH_EMAIL_MINLENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_EMAIL_MINLENGTH),
      },
      maxLength: {
        value: AUTH_EMAIL_MAXlENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_EMAIL_MAXlENGTH),
      },
      pattern: {
        value: emailRegex,
        message: "Email pattern is incorrect",
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
    validators: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: AUTH_PASSWORD_MINLENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_PASSWORD_MINLENGTH),
      },
      maxLength: {
        value: AUTH_USERNAME_MAXLENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_PASSWORD_MAXLENGTH),
      },
    },
  },
];
