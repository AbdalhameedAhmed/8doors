import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface patientDataResponse {
  mobileVerified: boolean;
  token: string;
}

export const updatePatientData = createApi({
  reducerPath: "patientData",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    updatePatientData: builder.mutation({
      query: (data) => ({
        url: `/patients`,
        method: "put",
        body: data
      }),
      transformResponse: (response: AxiosResponse<patientDataResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const { useUpdatePatientDataMutation } = updatePatientData
