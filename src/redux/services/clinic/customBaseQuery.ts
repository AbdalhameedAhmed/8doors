import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customBaseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:9999/clinic-management`,
  prepareHeaders: (headers, { getState }) => {
    // Get the current value of the token from state
    const token = localStorage.getItem("token")
    // If we have a token, add it to the headers
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
