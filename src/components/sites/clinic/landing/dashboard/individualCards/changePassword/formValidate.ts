function formValdate(values: Record<string, any>): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!values.currentPassword) {
    errors.currentPassword = 'This field is required';
  }

  if (!values.newPassword) {
    errors.newPassword = 'This field is required';
  }

  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = 'This field is required';
  } else if (values.newPassword !== values.confirmNewPassword) {
    errors.confirmNewPassword = 'Please make sure to enter the same password.';
  }
  return errors;
}

export { formValdate };
