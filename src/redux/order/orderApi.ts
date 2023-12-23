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
  }),
});

export const { useGetAllOrderQuery } = OrderApi;
