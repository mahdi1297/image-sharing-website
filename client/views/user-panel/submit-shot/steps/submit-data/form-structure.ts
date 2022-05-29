import {
  TITLE,
  IMAGE_TITLE_PLACEHOLDER,
  TEXT,
  TITLE_LABEL,
  TITLE_REQUIRED_ERROR,
  TITLE_MINLENGTH_ERROR,
  TITLE_MAXLENGTH_ERROR,
  DESCRIPTION,
  DESCRIPTION_PLACEHOLDER,
  DESCRIPTION_LABEL,
  DESCRIPTION_REQUIRED_ERROR,
  DESCRIPTION_MINLENGTH_ERROR,
  DESCRIPTION_MAXLENGTH_ERROR,
  ALT_IMAGE,
  ALT_IMAGE_PLACEHOLDER,
  ALT_IMAGE_LABEL,
  ALT_IMAGE_REQUIRED_ERROR,
  ALT_IMAGE_MINLENGTH_ERROR,
  ALT_IMAGE_MAXLENGTH_ERROR,
  COLOR_IMAGE,
  COLOR_IMAGE_PLACEHOLDER,
  COLOR_IMAGE_LABEL,
  COLOR_IMAGE_REQUIRED_ERROR,
  COLOR_IMAGE_MINLENGTH_ERROR,
  COLOR_IMAGE_MAXLENGTH_ERROR,
  COUNTRY,
  COUNTRY_PLACEHOLDER,
  COUNTRY_LABEL,
  COUNTRY_REQUIRED_ERROR,
  COUNTRY_MINLENGTH_ERROR,
  COUNTRY_MAXLENGTH_ERROR,
  CITY,
  CITY_PLACEHOLDER,
  CITY_LABEL,
  CITY_REQUIRED_ERROR,
  CITY_MINLENGTH_ERROR,
  CITY_MAXLENGTH_ERROR,
  MD,
} from "@consts/index";

export const formStructure = [
  {
    id: 1,
    size_class: MD,
    required: true,
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
    required: true,
    size_class: MD,
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
    required: true,
    type: TEXT,
    size_class: MD,
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
  {
    id: 4,
    type: TEXT,
    required: true,
    size_class: MD,
    name: COLOR_IMAGE,
    placeholder: COLOR_IMAGE_PLACEHOLDER,
    label: COLOR_IMAGE_LABEL,
    validation: {
      required: COLOR_IMAGE_REQUIRED_ERROR,
      minLength: {
        value: 3,
        message: COLOR_IMAGE_MINLENGTH_ERROR,
      },
      maxLength: {
        value: 10,
        message: COLOR_IMAGE_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 5,
    type: TEXT,
    required: true,
    size_class: MD,
    name: COUNTRY,
    placeholder: COUNTRY_PLACEHOLDER,
    label: COUNTRY_LABEL,
    validation: {
      required: COUNTRY_REQUIRED_ERROR,
      minLength: {
        value: 2,
        message: COUNTRY_MINLENGTH_ERROR,
      },
      maxLength: {
        value: 50,
        message: COUNTRY_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 6,
    type: TEXT,
    required: true,
    size_class: MD,
    name: CITY,
    placeholder: CITY_PLACEHOLDER,
    label: CITY_LABEL,
    validation: {
      required: CITY_REQUIRED_ERROR,
      minLength: {
        value: 2,
        message: CITY_MINLENGTH_ERROR,
      },
      maxLength: {
        value: 50,
        message: CITY_MAXLENGTH_ERROR,
      },
    },
  },
];
