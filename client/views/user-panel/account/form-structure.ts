import {
  TEXT,
  REQUIRED_FIELD_ERROR,
  NAME_LABEL,
  NAME,
  NAME_PLACEHOLDER,
  NAME_MINLENGTH,
  NAME_MAXLENGTH,
  NAME_MINLENGTH_ERROR,
  NAME_MAXLENGTH_ERROR,
  LASTNAME_LABEL,
  LASTNAME,
  LASTNAME_PLACEHOLDER,
  LASTNAME_MINLENGTH,
  LASTNAME_MAXLENGTH,
  LASTNAME_MINLENGTH_ERROR,
  LASTNAME_MAXLENGTH_ERROR,
  LOCATION_LABEL,
  LOCATION,
  LOCATION_PLACEHOLDER,
  LOCATION_MINLENGTH,
  LOCATION_MINLENGTH_ERROR,
  LOCATION_MAXLENGTH,
  LOCATION_MAXLENGTH_ERROR,
  DESCRIPTION_LABEL,
  DESCRIPTION,
  DESCRIPTION_PLACEHOLDER,
  DESCRIPTION_MINLENGTH_ERROR,
  DESCRIPTION_MAXLENGTH_ERROR,
  DESCRIPTION_MINLENGTH,
  DESCRIPTION_MAXLENGTH,
} from "@consts/consts";

export const USERNAME = "username";
export const PRIFILE = "username";

export const formStructure = [
  {
    id: 1,
    size_class: "md",
    type: TEXT,
    label: NAME_LABEL,
    required: true,
    name: NAME,
    placeholder: NAME_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: NAME_MINLENGTH,
        message: NAME_MINLENGTH_ERROR,
      },
      maxLength: {
        value: NAME_MAXLENGTH,
        message: NAME_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 2,
    size_class: "md",
    type: TEXT,
    label: LASTNAME_LABEL,
    required: true,
    name: LASTNAME,
    placeholder: LASTNAME_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: LASTNAME_MINLENGTH,
        message: LASTNAME_MINLENGTH_ERROR,
      },
      maxLength: {
        value: LASTNAME_MAXLENGTH,
        message: LASTNAME_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 3,
    size_class: "md",
    type: TEXT,
    label: LOCATION_LABEL,
    required: true,
    name: LOCATION,
    placeholder: LOCATION_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: LOCATION_MINLENGTH,
        message: LOCATION_MINLENGTH_ERROR,
      },
      maxLength: {
        value: LOCATION_MAXLENGTH,
        message: LOCATION_MAXLENGTH_ERROR,
      },
    },
  },
  {
    id: 4,
    size_class: "md",
    type: TEXT,
    label: DESCRIPTION_LABEL,
    required: true,
    name: DESCRIPTION,
    placeholder: DESCRIPTION_PLACEHOLDER,
    validation: {
      required: REQUIRED_FIELD_ERROR,
      minLength: {
        value: DESCRIPTION_MINLENGTH,
        message: DESCRIPTION_MINLENGTH_ERROR,
      },
      maxLength: {
        value: DESCRIPTION_MAXLENGTH,
        message: DESCRIPTION_MAXLENGTH_ERROR,
      },
    },
  },
];
