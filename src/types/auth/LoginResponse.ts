export interface LoginResponse {
  mobileVerified: boolean;
  token: string;
  detail: string;
  violations: { field: string; message: string }[];
}
