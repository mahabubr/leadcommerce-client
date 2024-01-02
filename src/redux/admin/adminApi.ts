import api from "../api";

const admindApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    // * Create Admin
    addAdmin: builder.mutation({
      query: (data: any) => ({
        url: `/admin/create-admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Employe"],
    }),
    // * Get All Order
    getAllAdmin: builder.query({
      query: (arg: any) => ({
        url: `/admin`,
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useGetAllAdminQuery, useAddAdminMutation } = admindApi;
