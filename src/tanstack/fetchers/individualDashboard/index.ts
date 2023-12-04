import axiosClient from 'api/axiosClient';
import axiosClient2 from 'api/axiosClient2';
import { changePasswordRequestData } from 'types/auth/changePassword';
import { changePhoneNumberInitData } from 'types/patientTypes/changePhoneNumber';
import { patientProfileDataTypes } from 'types/patientTypes/patientProfileData';

export const sendProfileData = (patientData: patientProfileDataTypes) => {
  return axiosClient.put('/patients', patientData);
};

export const getProfileData = () => {
  return axiosClient
    .get('/account/profile')
    .then((res) => res.data)
    .catch(() => null);
};

export const getCountries = () => {
  return axiosClient2.get('/countries').then((res) => res.data);
};

export const getAllStatesData = (id: number) => {
  return axiosClient2.get(`/states?country-id=${id}`);
};

export const getAllCitiesData = (id: number) => {
  return axiosClient2.get(`/cities?state-id=${id}`);
};

export const getNationalIdData = () => {
  return axiosClient
    .get(`/files?file-type=NATIONAL_ID_FRONT,NATIONAL_ID_BACK`)
    .then((res) => res.data || null);
};

export const sendNationalIdFront = (data: FormData) => {
  return axiosClient.post('/files?file-type=NATIONAL_ID_FRONT', data);
};

export const sendNationalIdBack = (data: FormData) => {
  return axiosClient.post('/files?file-type=NATIONAL_ID_Back', data);
};

export const getBloodGroups = () => {
  return axiosClient2.get('/blood-groups').then((res) => res.data);
};

export const sendNewPassword = (data: changePasswordRequestData) => {
  return axiosClient.post('/account/change-password', data);
};

export const sendChangePhoneNubmerInit = (data: changePhoneNumberInitData) => {
  return axiosClient.post('/account/change-phone/init', data);
};

export const sendPhoneOtp = (data: string) => {
  return axiosClient.post('/account/change-phone/finish', data);
};

export const sendProfilePic = (data: FormData) => {
  return axiosClient.post('/files?file-type=PROFILE_PIC', data);
};
