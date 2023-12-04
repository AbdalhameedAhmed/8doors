import axiosClient from 'api/axiosClient';
import { otpRequest } from 'types/otpResponse';

export const sendOtp = (data: otpRequest) => {
  return axiosClient.post('/account/otp', data);
};

export const resendOtp = ({ username }: { username: string }) => {
  return axiosClient.post(`/account/otp/resend/${username}`);
};
