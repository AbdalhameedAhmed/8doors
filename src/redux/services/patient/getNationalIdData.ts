
import { createApi } from "@reduxjs/toolkit/query/react";

import {customBaseQuery} from "./customBaseQuery"


export const getNationalIdData = createApi({
  reducerPath:"nationalId",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getNationalIdData: builder.query({
      query: () => ({
        url:`/files?file-type=NATIONAL_ID_FRONT,NATIONAL_ID_BACK`,
        method:"get",
      }),
      
    }),
  }),
});


export const {useGetNationalIdDataQuery} = getNationalIdData
