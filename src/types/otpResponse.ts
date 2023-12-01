export type otpResponse = {
  token: string;
  data: { detail: string };
};

export type otpRequest = {
  username: string;
  otpCode: string;
};

export type otpFailed = {
  message: string;
  detail: string;
};
