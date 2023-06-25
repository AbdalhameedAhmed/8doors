import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const changePhoneNubmerFinish = createApi({
  reducerPath: 'changePhoneNubmerFinish',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    changePhoneNubmerFinish: builder.mutation({
      query: (data) => ({
        url: `/account/change-phone/finish`,
        method: 'post',
        body: data,
      }),
    }),
  }),
});

export const { useChangePhoneNubmerFinishMutation } = changePhoneNubmerFinish;
