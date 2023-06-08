import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { parse } from 'cookie';

import { rootState } from 'redux/store';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:9090/api/patient-app/v1`,

  prepareHeaders: (headers, { getState }) => {
    // Get the current value of the token from state
    const token = parse(document.cookie).token
    // If we have a token, add it to the headers
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
