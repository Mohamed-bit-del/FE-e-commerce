import apiSlice from '../redux/api/apiSlice';

const authApi = apiSlice.injectEndpoints({
  tagTypes: ['Auth'],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'session/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useLoginMutation } = authApi;
