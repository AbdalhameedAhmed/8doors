function formValdate(values: Record<string, any>): Record<string, string> {

    const errors: Record<string, string> = {};
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.firstName) {
        errors.firstName = "This field is required";
    }
    if (!values.lastName) {
        errors.lastName = "This field is required";
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
    if (!values.zipCode) {
        errors.zipCode = "This field is required";
    }
    return errors;
}

export { formValdate }