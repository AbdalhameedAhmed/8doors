import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface otpReqType {
  token:string
}

export const Otp = createApi({
  reducerPath: "otp",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    Otp: builder.mutation({
      query: (data) => ({
        url: `/account/otp`,
        method: "post",
        body: data
      }),
      transformResponse: (response: AxiosResponse<otpReqType>) => {
        return response.data;
      },

    }),
  }),
});

export const { useOtpMutation } = Otp
