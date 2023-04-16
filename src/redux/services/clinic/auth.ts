import { AxiosResponse } from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

import {customBaseQuery} from "./customBaseQuery"

interface LoginResponse {
  token: string;
}

export const Login = createApi({
  reducerPath:"token",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url:`/v1/authenticate`,
        method:"post",
        body:data
      }),
      transformResponse: (response:AxiosResponse<LoginResponse>) => {
        return response.data;
      },
      
    }),
  }),
});

export const {useLoginMutation} = Login














// export const petApi = createApi({
  //     reducerPath: "petApi",
  //     baseQuery: fetchBaseQuery({ baseUrl: "http://pets-v2.dev-apis.com" }),
  //     endpoints: (builder) => ({
    //       getPet: builder.query({
      //         query: (id) => ({ url: "pets", params: { id } }),
      //         transformResponse: (response: any) => response.pets[0],
      //       }),
      //     }),
      //   });
      
      
      // export const getClinics = createApi({
      //   reducerPath:"clinics",
      //   baseQuery: customBaseQuery,
      //   endpoints: (builder) => ({
      //     // Define an endpoint for getting user details
      //     getUserDetails: builder.query({
      //       query: () => "/v1/clinics",
      //     }),
      //     // Define other endpoints as needed
      //   }),
      // });
      
      // export const addClinics = createApi({
      //   baseQuery: customBaseQuery,
      //   endpoints: (builder) => ({
      //     // Define an endpoint for getting user details
      //     getUserDetails: builder.query({
      //       query: () => "/v1/clinics",
      //     }),
      //     // Define other endpoints as needed
      //   }),
      // });
//   export const { useGetPetQuery } = petApi;
//   export const api =  petApi;
