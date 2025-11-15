import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let apiUrl = process.env.REACT_APP_BASE_URL;

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: () => ({}),
});
console.log({baseUrl: apiUrl});

export default apiSlice;
