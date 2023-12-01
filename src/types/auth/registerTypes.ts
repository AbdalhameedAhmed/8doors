export type User = {
  token: string;
  email: string;
  phoneNumber: string;
  username: string;
};

export type RegisterFaild = {
  message: string;
  title: string;
  violations: { field: string; message: string }[];
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
};
