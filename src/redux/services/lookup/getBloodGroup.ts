import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const getBloodGroups = createApi({
  reducerPath: 'bloodGroups',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getBloodGroups: builder.query({
      query: () => ({
        url: `/blood-groups`,
        method: 'get',
      }),
    }),
  }),
});
export const { useGetBloodGroupsQuery } = getBloodGroups;
