import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface profilePicResponse {
  mobileVerified: boolean;
  token: string;
}

export const profilePic = createApi({
  reducerPath: "profilePic",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    profilePic: builder.mutation({
      query: (data) => ({
        url: `/files?file-type=PROFILE_PIC`,
        method: "post",
        body: {file:data}
      }),
      transformResponse: (response: AxiosResponse<profilePicResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const { useProfilePicMutation } = profilePic
