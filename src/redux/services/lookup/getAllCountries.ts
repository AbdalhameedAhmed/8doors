import { createApi } from "@reduxjs/toolkit/query/react";

import {customBaseQuery} from "./customBaseQuery"

export const getCountries = createApi({
  reducerPath:"Countries",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url:`/countries`,
        method:"get",
      }),
      
    }),
  }),
});
export const {useGetCountriesQuery} = getCountries
