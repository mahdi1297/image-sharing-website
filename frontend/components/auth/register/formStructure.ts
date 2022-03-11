import {
  AUTH_EMAIL_MAXlENGTH,
  AUTH_EMAIL_MINLENGTH,
  AUTH_PASSWORD_MAXLENGTH,
  AUTH_PASSWORD_MINLENGTH,
  AUTH_USERNAME_MAXLENGTH,
  AUTH_USERNAME_MINLENGTH,
  EMAIL,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  LG,
  PASSWORD,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  TEXT,
  USERNAME,
  USERNAME_LABEL,
  USERNAME_PLACEHOLDER,
} from "constaints/consts";
import {
  MINLENGTH_FIELD_ERROR,
  REQUIRED_FIELD_ERROR,
} from "constaints/Messages.const";
import { emailRegex } from "constaints/regex";

export const formStructure = [
  {
    id: 1,
    size: LG,
    type: TEXT,
    label: USERNAME_LABEL,
    name: USERNAME,
    placeholder: USERNAME_PLACEHOLDER,
    validators: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: AUTH_USERNAME_MINLENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_USERNAME_MINLENGTH),
      },
      maxLength: {
        value: AUTH_USERNAME_MAXLENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_USERNAME_MAXLENGTH),
      },
    },
  },
  {
    id: 2,
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
    id: 3,
    size: LG,
    type: TEXT,
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
        value: AUTH_PASSWORD_MAXLENGTH,
        message: MINLENGTH_FIELD_ERROR(AUTH_PASSWORD_MAXLENGTH),
      },
    },
  },
];
