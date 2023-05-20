import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery"

interface LoginResponse {
  token: string;
}

export const Login = createApi({
  reducerPath: "token",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: `/v1/authenticate`,
        method: "post",
        body: data
      }),
      transformResponse: (response: AxiosResponse<LoginResponse>) => {
        return response.data;
      },

    }),
  }),
});

export const { useLoginMutation } = Login
