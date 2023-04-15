export function FormValidate (values:any){
  
    const errors:any = {};
    if (!values.currentPassword) {
      errors.currentPassword = "Current password is required";
    }

    if (!values.newPassword) {
      errors.newPassword = "New password is required";
    }

    if (
      values.newPassword !==
      values.newPasswordConfirmation 
    ) {
      errors.newPasswordConfirmation = "Passwords do not match";
    } 

    return errors;
  
}