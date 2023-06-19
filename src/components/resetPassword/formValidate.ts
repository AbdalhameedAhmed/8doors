function formValdate(values: Record<string, any>): Record<string, string> {

  const errors: Record<string, string> = {};

  if (!values.password) {
    errors.password = "This field is required";
  }
  
  if (!values.confirm) {
    errors.confirm = "This field is required";
  } else if (values.password !== values.confirm) {
    errors.confirm = "Please make sure to enter the same password.";
  }
  return errors;
}

export { formValdate }