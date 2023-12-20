import api from "../api";

const productApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllProducts: builder.query({
      query: ({
        limit,
        page,
        product_status,
      }: {
        limit: number;
        page: number;
        product_status: string;
      }) => `/products?status=${product_status}&page=${page}&limit=${limit}`,
      providesTags: ["product"],
    }),
    addProducts: builder.mutation({
      query: (data: any) => ({
        url: `/products/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (data: any) => ({
        url: `/products/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (data: any) => ({
        url: `/products/`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllProductsMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
