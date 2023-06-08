import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface profilePicResponse {
  url:string;
}

export const profilePic = createApi({
  reducerPath: "profilePic",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    profilePic: builder.mutation({
      query: (data) => ({
        url: `/files?file-type=PROFILE_PIC`,
        method: "post",
        body: data
      }),
      transformResponse: (response: AxiosResponse<profilePicResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const { useProfilePicMutation } = profilePic
