
function formValdate(values: any, submitTime: Function) {
  const errors: any = {};
  const validPhone = /^[0-9]*$/
  if (!values.clinicName) {
      errors.clinicName = "This field is required";
  }
  if (!values.address) {
      errors.address = "This field is required";
  }
  if (!values.phone) {
      errors.phone = "This field is required";
  } else if (!values.phone.match(validPhone)) {
      errors.phone = "Only numbers is required";
  }
  else {
      submitTime(true)
  }


  return errors;
}

export { formValdate }