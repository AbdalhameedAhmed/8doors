import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

export const deleteClinic = createApi({
  reducerPath: 'deleteClinic',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    deleteClinic: builder.mutation({
      query: ({ id }) => ({
        url: `/v1/clinics/${id}`,
        method: 'delete',
      }),
    }),
  }),
});

export const { useDeleteClinicMutation } = deleteClinic;
