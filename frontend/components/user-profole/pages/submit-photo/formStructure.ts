import {
  ALT_IMAGE,
  ALT_IMAGE_LABEL,
  ALT_IMAGE_PLACEHOLDER,
  DESCRIPTION,
  DESCRIPTION_LABEL,
  DESCRIPTION_PLACEHOLDER,
  IMAGE_TITLE_PLACEHOLDER,
  TEXT,
  TITLE,
  TITLE_LABEL,
} from "constaints/consts";
import {
  ALT_IMAGE_MAXLENGTH_ERROR,
  ALT_IMAGE_MINLENGTH_ERROR,
  ALT_IMAGE_REQUIRED_ERROR,
  DESCRIPTION_MAXLENGTH_ERROR,
  DESCRIPTION_MINLENGTH_ERROR,
  DESCRIPTION_REQUIRED_ERROR,
  TITLE_MAXLENGTH_ERROR,
  TITLE_MINLENGTH_ERROR,
  TITLE_REQUIRED_ERROR,
} from "constaints/errors.const";

export const formStructure = [
  {
    id: 1,
    size: "50%",
    name: TITLE,
    placeholder: IMAGE_TITLE_PLACEHOLDER,
    type: TEXT,
    label: TITLE_LABEL,
    validation: {
      required: TITLE_REQUIRED_ERROR,
      minLength: {
        value: 3,
        message: TITLE_MINLENGTH_ERROR,
      },
      maxLength: {
        value: 200,
        message: TITLE_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 2,
    type: TEXT,
    size: "50%",
    name: DESCRIPTION,
    placeholder: DESCRIPTION_PLACEHOLDER,
    label: DESCRIPTION_LABEL,
    validation: {
      required: DESCRIPTION_REQUIRED_ERROR,
      minLength: {
        value: 3,
        message: DESCRIPTION_MINLENGTH_ERROR,
      },
      maxLength: {
        value: 350,
        message: DESCRIPTION_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 3,
    type: TEXT,
    size: "50%",
    name: ALT_IMAGE,
    placeholder: ALT_IMAGE_PLACEHOLDER,
    label: ALT_IMAGE_LABEL,
    validation: {
      required: ALT_IMAGE_REQUIRED_ERROR,
      minLength: {
        value: 3,
        message: ALT_IMAGE_MINLENGTH_ERROR,
      },
      maxLength: {
        value: 350,
        message: ALT_IMAGE_MAXLENGTH_ERROR,
      },
    },
  },
];
