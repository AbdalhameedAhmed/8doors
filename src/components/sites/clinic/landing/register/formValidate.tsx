function formValidate(values: Record<string, any>): Record<string, string> {

    const errors: Record<string, string> = {};
    const validUserName = /^(?=[a-zA-Z][a-zA-Z0-9_]{3,49}$)(?!.*[_]{2})[^_].*[^_]$/;
    const validPassword = /^.{6,}$/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPhone = /^(010|011|012|015)\d{8}$/;

    if (!values.username) {
        errors.username = "This field is required";
    } else if (values.username.length < 4) {
        errors.username = 'Username should be at least 4 characters';
    } else if (!values.username.match(validUserName)) {
        errors.username = "Please enter a valid username"
    } else if (values.username.length > 50) {
        errors.username = 'Username can’t exceed 50 characters';
    }

    if (!values.email) {
        errors.email = "This field is required";
    } else if (!values.email.match(validEmail)) {
        errors.email = "Invalid email address format. Please enter a valid email address.";
    } else if (values.email.length < 4) {
        errors.email = 'Email should be at least 4 characters';
    } else if (values.email.length > 50) {
        errors.email = 'Email should be up to 20 characters long';
    }

    if (!values.password) {
        errors.password = "This field is required";
    } else if (!values.password.match(validPassword)) {
        errors.password = "Password must contain at least 6 characters"
    } else if (values.password.length < 6) {
        errors.password = 'Password should be at least 6 character';
    } else if (values.password.length > 100) {
        errors.password = 'Password can’t exceed 100 characters';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = "This field is required";
    } else if (!values.phoneNumber.match(validPhone)) {
        errors.phoneNumber = "Enter a valid 11-digit that starts with 010, 011, 012, or 015 without the country code"
    }
    if (values.password !== values.confirm) {
        errors.confirm = "the password and the confirm password must be the same";
    }

    return errors;
}

export { formValidate }