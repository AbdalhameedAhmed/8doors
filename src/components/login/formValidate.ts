function formValidate(values: Record<string, any>): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!values.username) {
    errors.username = 'This field is required';
  } else if (values.username.length < 4) {
    errors.username = 'Username should be at least 4 characters';
  } else if (values.username.length > 50) {
    errors.username = 'Username can’t exceed 50 characters';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password should be at least 6 character';
  } else if (values.password.length > 100) {
    errors.password = 'Password can’t exceed 100 characters';
  }

  return errors;
}

export { formValidate };
