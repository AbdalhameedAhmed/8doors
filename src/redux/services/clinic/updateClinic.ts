import { createApi } from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "./customBaseQuery"

export const updateClinic = createApi({
  reducerPath: 'updateClinic',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    updateClinic: builder.mutation({
      query: (data) => ({
        url:`/v1/clinics/${data.id}`,
        method:"put",
        body:data
      })
    }),
  }),
});

export const {useUpdateClinicMutation} = updateClinic