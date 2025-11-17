import apiSlice from '../redux/api/apiSlice';

const productApi = apiSlice.injectEndpoints({
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'store/products',
      method: 'GET',
      providesTags: ['Product'],
      keepUnusedDataFor: 600,
    }),

    getProductId: builder.query({
      query: (id) => `store/products/${id}`,
      method: 'GET',
      providesTags: ['Product'],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `store/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `store/products/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),

    createProduct: builder.mutation({
      query: (newdata) => ({
        url: `store/products`,
        method: 'POST',
        body: newdata,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIdQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
} = productApi;
