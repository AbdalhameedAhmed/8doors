import { AxiosResponse } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { otpResponse } from 'types/otpResponse';

import { customBaseQuery } from './customBaseQuery';

export const Otp = createApi({
  reducerPath: 'otp',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    Otp: builder.mutation({
      query: (data) => ({
        url: `/account/otp`,
        method: 'post',
        body: data,
      }),
      transformResponse: (response: AxiosResponse<otpResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const { useOtpMutation } = Otp;
