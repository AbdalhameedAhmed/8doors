export interface LoginResponse {
  mobileVerified: boolean;
  token: string;
  data: {
    detail: string;
    violations: { field: string; message: string }[];
  };
}
