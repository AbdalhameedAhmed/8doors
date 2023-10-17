function formValidate(values: Record<string, any>): Record<string, string> {
  const errors: Record<string, string> = {};
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!values.email.match(validEmail)) {
    errors.email =
      'Please include an @ in the email address then add more letters';
  }

  return errors;
}

export { formValidate };
