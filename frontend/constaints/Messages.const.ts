export const ADD_TO_COLLOCTION = "Add To Colloction";

//form errors
export const REQUIRED_FIELD_ERROR = "This filed is required";

// maxlength & minlength errors
export const MINLENGTH_FIELD_ERROR = (amount: number) => {
  return `This filed must be at least ${amount} charachters`;
};

export const MAXLENGTH_FIELD_ERROR = (amount: number) => {
  return `This filed must be under ${amount} charachters`;
};
