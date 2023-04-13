import { createApi } from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "./customBaseQuery"

export const addClinic = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    addClinic: builder.mutation({
      query: (data) => ({
        url:`/v1/clinics`,
        method:"post",
        body:data
      }),
    }),
  }),
});

export const getClinics = createApi({
  reducerPath:"clinics",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getClinics: builder.query({
      query: () => ({
        url:`/v1/clinics`,
        method:"get",
      }),
      transformResponse: (response) => {
        
        return response.data.token;
      },
      
    }),
  }),
});
export const {useAddClinicMutation} = addClinic
export const {useGetClinicsQuery} = getClinics
