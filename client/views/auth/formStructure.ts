import {
  AUTH_EMAIL_MAXlENGTH,
  AUTH_EMAIL_MINLENGTH,
  AUTH_PASSWORD_MINLENGTH,
  AUTH_USERNAME_MAXLENGTH,
  AUTH_USERNAME_MINLENGTH,
  EMAIL,
  EMAIL_LABEL,
  EMAIL_MAXLENGTH_ERROR,
  EMAIL_MINLENGTH_ERROR,
  EMAIL_PATTERN_ERROR,
  EMAIL_PLACEHOLDER,
  PASSWORD,
  PASSWORD_LABEL,
  PASSWORD_MAXLENGTH_ERROR,
  PASSWORD_MINLENGTH_ERROR,
  PASSWORD_PLACEHOLDER,
  REQUIRED_FIELD_ERROR,
  TEXT,
  USERNAME,
  USERNAME_LABEL,
  USERNAME_MAXLENGTH_ERROR,
  USERNAME_MINLENGTH_ERROR,
  USERNAME_PLACEHOLDER,
} from "@consts/index";
import { EMAIL_REGAX } from "@consts/regax";

export const loginFormStructure = [
  {
    id: 1,
    size_class: "lg",
    type: TEXT,
    label: EMAIL_LABEL,
    required: true,
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
        value: EMAIL_REGAX,
        message: EMAIL_PATTERN_ERROR,
      },
    },
  },
  {
    id: 2,
    size_class: "lg",
    type: PASSWORD,
    required: true,
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

export const registerFormStructure = [
  {
    id: 1,
    size: "lg",
    type: TEXT,
    label: USERNAME_LABEL,
    required: true,
    name: USERNAME,
    placeholder: USERNAME_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: AUTH_USERNAME_MINLENGTH,
        message: USERNAME_MINLENGTH_ERROR,
      },
      maxLength: {
        value: AUTH_USERNAME_MAXLENGTH,
        message: USERNAME_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 2,
    size_class: "lg",
    type: TEXT,
    label: EMAIL_LABEL,
    required: true,
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
        value: EMAIL_REGAX,
        message: EMAIL_PATTERN_ERROR,
      },
    },
  },
  {
    id: 3,
    size_class: "lg",
    type: PASSWORD,
    required: true,
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
