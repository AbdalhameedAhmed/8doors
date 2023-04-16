import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './clinic/customBaseQuery';

export const signup = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: `/v1/account/register`,
        method: 'post',
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation } = signup;
