function formValidate(values: Record<string, any>): Record<string, string> {

    const errors: Record<string, string> = {};
    const validNationalId = /^([23])(\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?!00)\d{7}$/;

    if (!values.firstName) {
        errors.firstName = "This field is required";

    } else if (values?.firstName?.length > 50) {
        errors.firstName = "Your first name exceeds maximum length of 50 characters";
    }

    if (!values.lastName) {

        errors.lastName = "This field is required";

    } else if (values?.lastName?.length > 254) {

        errors.lastName = "Your last name exceeds maximum length of 50 characters";

    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "This field is required";
    }
    if (!values.bloodGroupId) {
        errors.bloodGroupId = "This field is required";
    }
    if (!values.countryId) {
        errors.countryId = "This field is required";
    }
    if (!values.stateId) {
        errors.stateId = "This field is required";
    }
    if (!values.cityId) {
        errors.cityId = "This field is required";
    }
    if (!values.address) {
        errors.address = "This field is required";
    }
    if (!values.nationalId) {
        errors.nationalId = "This field is required";
    } else if (!values.nationalId.match(validNationalId)) {
        errors.nationalId = "Please enter a valid Egyptian national ID number.";
    }
    return errors;
}

export { formValidate }