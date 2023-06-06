import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface nationalIdFrontResponse {
  url: string;
}

export const nationalIdFront = createApi({
  reducerPath: "idFront",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    nationalIdFront: builder.mutation({
      query: (data) => ({
        url: `/files?file-type=NATIONAL_ID_Front`,
        method: "post",
        body: {file:data}
      }),
      transformResponse: (response: AxiosResponse<nationalIdFrontResponse>) => {
        return response.data;
      },

    }),
  }),
});

export const { useNationalIdFrontMutation } = nationalIdFront
