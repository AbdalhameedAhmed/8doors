function formValidate(values: Record<string, any>): Record<string, string> {
  const errors: Record<string, string> = {};
  const validPassword =
    /^(?=.*[a-z].*[a-z].*[a-z].*[a-z].*[a-z].*[a-z])[a-z0-9]*$/;

  if (!values.currentPassword) {
    errors.currentPassword = 'This field is required';
  }

  if (!values.newPassword) {
    errors.newPassword = 'This field is required';
  } else if (!values.newPassword.match(validPassword)) {
    errors.newPassword = 'Password must contain at least 6 characters';
  } else if (values.newPassword.length > 50) {
    errors.newPassword = 'Password should be up to 20 characters long';
  }

  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = 'This field is required';
  } else if (values.newPassword !== values.confirmNewPassword) {
    errors.confirmNewPassword = 'Please make sure to enter the same password.';
  }
  return errors;
}

export { formValidate };
