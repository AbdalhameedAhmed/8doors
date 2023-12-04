function formValidate(values: Record<string, any>): Record<string, string> {
  const errors: Record<string, string> = {};
  const validPassword = /^.{6,}$/;

  if (!values.currentPassword) {
    errors.currentPassword = 'This field is required';
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword = 'Password should be at least 6 character';
  } else if (values.currentPassword.length > 100) {
    errors.currentPassword = 'Password can’t exceed 100 characters';
  }

  if (!values.newPassword) {
    errors.newPassword = 'This field is required';
  } else if (!values.newPassword.match(validPassword)) {
    errors.newPassword = 'Password must contain at least 6 characters';
  } else if (values.newPassword.length < 6) {
    errors.newPassword = 'Password should be at least 6 character';
  } else if (values.newPassword.length > 100) {
    errors.newPassword = 'Password can’t exceed 100 characters';
  }

  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = 'This field is required';
  } else if (values.newPassword !== values.confirmNewPassword) {
    errors.confirmNewPassword = 'Please make sure to enter the same password.';
  }
  return errors;
}

export { formValidate };
