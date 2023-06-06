import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const getCities = createApi({
  reducerPath: 'getCities',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getCities: builder.mutation({
      query: ({ id }) => ({
        url: `/cities?state-id=${id}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetCitiesMutation } = getCities;
