import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// base query for all the auth related endpoints
const baseQuery = fetchBaseQuery({
  baseUrl: '/api/v1',
  credentials: 'include', // include cookies for credentials
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.user?.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}), // endpoints wiith empty builder for code splitting of endpoints definations
});
