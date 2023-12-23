import api from "../api";
import { tagTypes } from "../types/tagTypes";

const categoryApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllCategories: builder.query({
      query: ({
        limit,
        page,
        // product_status,
        sortOrder,
      }: {
        limit: number;
        page: number;
        product_status: string;
        sortOrder: "desc" | "asc";
      }) => `/category?page=${page}&limit=${limit}&sortOrder=${sortOrder}`,
      providesTags: [tagTypes.category],
    }),

    getCategory: builder.query({
      query: ({ id }: { id: string }) => `/category/${id}`,
      providesTags: [tagTypes.category],
    }),

    addCategory: builder.mutation({
      query: (data: any) => ({
        url: `/category`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.category],
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }: any) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.category],
    }),

    deleteCategory: builder.mutation({
      query: (id: string) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
  useGetCategoryQuery,
} = categoryApi;
