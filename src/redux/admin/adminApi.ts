import api from "../api";

const admindApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
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

export const { useGetAllAdminQuery } = admindApi;
