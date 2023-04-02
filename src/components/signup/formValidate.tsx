function fromValdate(values: any, submitTime: Function) {
    const errors: any = {};
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
        errors.username = "This field is required";
    }
    if (!values.email) {
        errors.email = "This field is required";
    } else if (!values.email.match(validEmail)) {
        errors.email = "Please include an @ in the email address then add more letters";
    }
    if (!values.password) {
        errors.password = "This field is required";
    }
    if (!values.confirm) {
        errors.confirm = "This field is required";
    } else if (values.password !== values.confirm) {
        errors.confirm = "the password and the confirm password must be the same";
    } else {
        submitTime(true)
    }

    return errors;
}

export { fromValdate }