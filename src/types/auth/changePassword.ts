export interface changePasswordFailed {
  data: { detail: string };
}
export type changePasswordRequestData = {
  currentPassword: string;
  newPassword: String;
};
