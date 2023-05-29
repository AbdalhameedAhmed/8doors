function formValdate(values: Record<string, any>): Record<string, string> {

  const errors: Record<string, string> = {};

  if (!values.username) {
    errors.username = "This field is required";
  }
  if (!values.password) {
    errors.password = "This field is required";
  }
  
  return errors;
}

export { formValdate }