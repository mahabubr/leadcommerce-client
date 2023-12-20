import api from "../api";

const productApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllProducts: builder.query({
      query: ({
        limit,
        page,
        product_status,
        sortOrder,
      }: {
        limit: number;
        page: number;
        product_status: string;
        sortOrder: "desc" | "asc";
      }) =>
        `/products?status=${product_status}&page=${page}&limit=${limit}&sortOrder=${sortOrder}`,
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
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
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
