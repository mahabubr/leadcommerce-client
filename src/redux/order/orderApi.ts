import api from "../api";

const OrderApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    // * Get All Order
    getAllOrder: builder.query({
      query: (arg: any) => ({
        url: `/Orders`,
        method: "GET",
        params: arg,
      }),
    }),
    getSingleOrder: builder.query({
      query: (id: string) => ({
        url: `/Orders/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetAllOrderQuery, useGetSingleOrderQuery } = OrderApi;
