export function changeFormValidate (values:any){
  
    const errors:any = {};
    if (!values.currentPassword) {
      errors.currentPassword = "Current password is required";
    }

    if (!values.newPassword) {
      errors.newPassword = "New password is required";
    }

    if (
      values.newPassword &&
      values.newPasswordConfirmation !== values.newPassword
    ) {
      errors.newPasswordConfirmation = "Passwords do not match";
    }

    return errors;
  
}