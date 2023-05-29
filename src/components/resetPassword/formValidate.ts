function formValdate(values: Record<string, any>): Record<string, string> {

  const errors: Record<string, string> = {};

  if (!values.password) {
    errors.password = "This field is required";
  }
  
  if (!values.confirm) {
    errors.confirm = "This field is required";
  } else if (values.password !== values.confirm) {
    errors.confirm = "Must Match";
  }
  return errors;
}

export { formValdate }