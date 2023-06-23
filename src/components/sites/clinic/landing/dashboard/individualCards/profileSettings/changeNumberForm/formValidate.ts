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
  }

  return errors;
}

export { formValidate };
