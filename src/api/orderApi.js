import apiSlice from '../redux/api/apiSlice';

const orderApi = apiSlice.injectEndpoints({
  tagTypes: ['Order'],

  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => 'orders',
      method: 'GET',
      providesTags: ['Order'],
      keepUnusedDataFor: 600,
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: 'orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;

export default orderApi;
