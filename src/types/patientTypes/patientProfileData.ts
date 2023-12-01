export type patientProfileDataTypes = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  bloodGroupId: number;
  countryId: number;
  stateId: number;
  cityId: number;
  address: string;
  nationalId: string;
  gender: 'MALE' | 'FEMALE';
};

export type patientError = {
  message: string;
  detail: string;
};
