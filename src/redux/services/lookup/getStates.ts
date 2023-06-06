import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const getStates = createApi({
  reducerPath: 'getStates',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getStates: builder.mutation({
      query: ({ id }) => ({
        url: `/states?country-id=${id}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetStatesMutation } = getStates;
