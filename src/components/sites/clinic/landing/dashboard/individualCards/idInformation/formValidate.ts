function formValdate(values: Record<string, any>): Record<string, string> {

  const errors: Record<string, string> = {};

  if (!values.frontImage) {
    errors.frontImage = "This field is required";
  }
  if (!values.backImage) {
    errors.backImage = "This field is required";
  }
  
  return errors;
}

export { formValdate }