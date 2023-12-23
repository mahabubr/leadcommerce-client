import api from "../api";
import { tagTypes } from "../types/tagTypes";

const storeApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllStores: builder.query({
      query: ({
        limit,
        page,
        sortOrder,
        searchTerm,
      }: {
        limit: number;
        page: number;
        product_status: string;
        sortOrder: "desc" | "asc";
        searchTerm: string;
      }) =>
        `/store?page=${page}&limit=${limit}&sortOrder=${sortOrder}&searchTerm=${searchTerm}`,
      providesTags: [tagTypes.store],
    }),

    getSingleStore: builder.query({
      query: ({ id }: { id: string }) => `/store/${id}`,
      providesTags: [tagTypes.store],
    }),

    addCategory: builder.mutation({
      query: (data: any) => ({
        url: `/store`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.store],
    }),

    updateStore: builder.mutation({
      query: ({ id, data }: any) => ({
        url: `/store/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.store],
    }),

    deleteStore: builder.mutation({
      query: (id: string) => ({
        url: `/store/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.store],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useDeleteStoreMutation,
  useGetAllStoresQuery,
  useGetSingleStoreQuery,
} = storeApi;
