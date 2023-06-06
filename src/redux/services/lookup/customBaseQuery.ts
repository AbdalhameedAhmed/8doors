import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { rootState } from 'redux/store';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:9094/api/lookup/v1`,
  

  prepareHeaders: (headers, { getState }) => {
    // Get the current value of the token from state
    const token = (getState() as rootState).auth.user.token;
    // If we have a token, add it to the headers
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
