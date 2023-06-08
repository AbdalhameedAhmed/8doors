
import { createApi } from "@reduxjs/toolkit/query/react";

import {customBaseQuery} from "./customBaseQuery"


export const getProfileData = createApi({
  reducerPath:"profileData",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getProfileData: builder.query({
      query: () => ({
        url:`/account/profile`,
        method:"get",
      }),
      
    }),
  }),
});


export const {useGetProfileDataQuery} = getProfileData
