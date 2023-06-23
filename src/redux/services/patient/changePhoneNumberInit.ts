import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const changePhoneNubmerInit = createApi({
  reducerPath: 'changePhoneNubmerInit',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    changePhoneNubmerInit: builder.mutation({
      query: (data) => ({
        url: `/account/change-phone/init`,
        method: 'post',
        body: data,
      }),
    }),
  }),
});

export const { useChangePhoneNubmerInitMutation } = changePhoneNubmerInit;
