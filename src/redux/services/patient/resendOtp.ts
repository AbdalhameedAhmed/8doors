import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface LoginResponse {
  token: string;
}

export const resendOtp = createApi({
  reducerPath: "resendotp",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    resendOtp: builder.mutation({
      query: (data) => ({
        url: `/account/otp/resend/${data.username}`,
        method: "post",
      }),
      transformResponse: (response: AxiosResponse<LoginResponse>) => {
        return response.data;
      },

    }),
  }),
});

export const { useResendOtpMutation } = resendOtp
