function fromValdate(values: any, submitTime: Function) {
    const errors: any = {};
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const validTel = /^[0-9]*$/
    if (!values.name) {
        errors.name = "This field is required";
    }
    if (!values.email) {
        errors.email = "This field is required";
    } else if (!values.email.match(validEmail)) {
        errors.email = "Please include an @ in the email address then add more letters";
    }
    if (!values.tel) {
        errors.tel = "This field is required";
    } else if (!values.tel.match(validTel)) {
        errors.tel = "Only numbers is required";
    }
    if (!values.gender) {
        errors.gender = "Choose your gender"
    }
    if (!values.speciality) {
        errors.speciality = "This field is required";
    } else {
        submitTime(true)
    }
    return errors;
}

export { fromValdate }