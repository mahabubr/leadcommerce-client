import api from "../api";

const productApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllProducts: builder.query({
      query: ({
        limit,
        page,
        product_status,
        sortOrder,
        searchTerm,
      }: {
        limit: number;
        page: number;
        product_status: string;
        sortOrder: "desc" | "asc";
        searchTerm: string;
      }) =>
        `/products?status=${product_status}&page=${page}&limit=${limit}&sortOrder=${sortOrder}&searchTerm=${searchTerm}`,
      providesTags: ["product"],
    }),
    getAProducts: builder.query({
      query: ({ id }: { id: string }) => `/products/${id}`,
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
      query: ({
        productId,
        formData,
      }: {
        productId: string;
        formData: any;
      }) => ({
        url: `/products/${productId}`,
        method: "PUT",
        body: formData,
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
  useAddProductsMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAProductsQuery,
} = productApi;
