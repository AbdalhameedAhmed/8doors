import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const changePassword = createApi({
  reducerPath: 'changePassword',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/v1/account/change-password`,
        method: 'post',
        body: data,
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = changePassword;
