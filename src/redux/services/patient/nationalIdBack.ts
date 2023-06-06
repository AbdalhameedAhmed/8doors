import { AxiosResponse } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';

interface nationalIdBackResponse {
  url: string;
}

export const nationalIdBack = createApi({
  reducerPath: 'idBack',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    nationalIdBack: builder.mutation({
      query: (data) => ({
        url: `/files?file-type=NATIONAL_ID_BACK`,
        method: 'post',
        body: { file: data },
      }),
      transformResponse: (response: AxiosResponse<nationalIdBackResponse>) => {
        return response.data;
      },
    }),
  }),
});

export const { useNationalIdBackMutation } = nationalIdBack;
