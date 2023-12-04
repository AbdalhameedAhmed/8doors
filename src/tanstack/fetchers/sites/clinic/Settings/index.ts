import axiosClient from 'api/axiosClient';
import { changePasswordRequestData } from 'types/auth/changePassword';

export const changePassword = (data: changePasswordRequestData) => {
  return axiosClient.post('/account/change-password', data);
};
