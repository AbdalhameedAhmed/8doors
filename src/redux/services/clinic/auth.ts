import { AxiosResponse } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';
import { LoginResponse } from 'types/LoginResponse';

export const Login = createApi({
  reducerPath: 'token',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: `/authenticate`,
        method: 'post',
        body: data,
      }),
      transformResponse: (response: AxiosResponse<LoginResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation } = Login;
