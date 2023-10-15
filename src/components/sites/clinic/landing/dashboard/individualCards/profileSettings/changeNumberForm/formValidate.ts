function formValidate(values: Record<string, any>): Record<string, string> {
  const errors: Record<string, string> = {};
  const validPhone = /^(010|011|012|015)\d{8}$/;

  if (!values.newPhoneNum) {
    errors.newPhoneNum = 'This field is required';
  } else if (!values.newPhoneNum.match(validPhone)) {
    errors.newPhoneNum =
      'Enter a valid 11-digit that starts with 010, 011, 012, or 015 without the country code';
  }
  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password should be at least 6 character';
  } else if (values.password.length > 50) {
    errors.username = 'Password should be up to 20 characters long';
  }

  return errors;
}

export { formValidate };
