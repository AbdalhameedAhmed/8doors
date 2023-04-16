
function formValidate(values: Record<string,string>):Record<string,string> {
  const errors: Record<string,string> = {};
  const validPhone = /^[0-9]*$/
  if (!values.clinicName) {
      errors.clinicName = "This field is required";
  }
  if (!values.address) {
      errors.address = "This field is required";
  }
  if (!values.phone) {
      errors.phone = "This field is required";
  } 


  return errors;
}

export { formValidate }