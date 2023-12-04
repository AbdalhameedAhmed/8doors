export type changePhoneNumberInitData = {
  newPhoneNum: string;
  password: string;
};

export type changePhoneNumberFailed = {
  message: string;
  detail: string;
};

export type phoneOtpFailed = {
  message: string;
  detail: string;
};
