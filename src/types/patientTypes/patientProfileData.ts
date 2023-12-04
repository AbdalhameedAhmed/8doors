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
  imageUrl: string;
};

export type patientError = {
  message: string;
  detail: string;
};

export type statesTypes = {
  id: number;
  nameAr: string;
  nameEn: string;
}[];

export type citiesTypes = {
  id: number;
  nameAr: string;
  nameEn: string;
}[];
