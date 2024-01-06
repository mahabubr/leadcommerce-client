import api from "../api";
import { tagTypes } from "../types/tagTypes";

const admindApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    // * Create Admin
    addAdmin: builder.mutation({
      query: (data: any) => ({
        url: `/admin/create-admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    // * Get All Order
    getAllAdmin: builder.query({
      query: (arg: any) => ({
        url: `/admin`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.admin],
    }),
    getAdmin: builder.query({
      query: () => `/admin/single`,
      providesTags: [tagTypes.admin],
    }),
    updateAdmin: builder.mutation({
      query: (data: any) => ({
        url: `/admin/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useGetAllAdminQuery,
  useAddAdminMutation,
  useGetAdminQuery,
  useUpdateAdminMutation,
} = admindApi;
