export function FormValidate(values: any): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.currentPassword) {
    errors.currentPassword = 'Current password is required';
  }

  if (!values.newPassword) {
    errors.newPassword = 'New password is required';
  }

  if (values.newPassword !== values.newPasswordConfirmation) {
    errors.newPasswordConfirmation = 'Passwords do not match';
  }

  return errors;
}
