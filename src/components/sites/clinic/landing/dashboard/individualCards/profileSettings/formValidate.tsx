function formValdate(values: Record<string, any>): Record<string, string> {

    const errors: Record<string, string> = {};
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.firstName) {
        errors.firstName = "This field is required";
    }
    if (!values.lastName) {
        errors.lastName = "This field is required";
    }
    if (!values.email) {
        errors.email = "This field is required";
    } else if (!values.email.match(validEmail)) {
        errors.email = "Please include an @ in the email address then add more letters";
    }
    if (!values.mobile) {
        errors.mobile = "This field is required";
    }
    if (!values.date) {
        errors.date = "This field is required";
    }
    if(!values.bloodType){
        errors.bloodType = "This field is required";
    }
    if(!values.country){
        errors.country = "This field is required";
    }
    if(!values.state){
        errors.state = "This field is required";
    }
    if(!values.city){
        errors.city = "This field is required";
    }
    if(!values.address){
        errors.address = "This field is required";
    }
    if(!values.zipCode){
        errors.zipCode = "This field is required";
    }
    return errors;
}

export { formValdate }