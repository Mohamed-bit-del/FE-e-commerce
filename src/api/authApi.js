import apiSlice from '../redux/api/apiSlice';

const authApi = apiSlice.injectEndpoints({
  tagTypes: ['Auth'],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) =>({
        url: 'session/login',
        method: 'POST',
        body: credentials,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }),
      invalidatesTags: ['Auth'],
    })
  }),
});

export const { useLoginMutation } = authApi;