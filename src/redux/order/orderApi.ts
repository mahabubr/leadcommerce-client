import api from "../api";
import { tagTypes } from "../types/tagTypes";

const OrderApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    // * Get All Order
    getAllOrder: builder.query({
      query: (arg: any) => ({
        url: `/Orders`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.orders],
    }),
    getAllOrderForStore: builder.query({
      query: (arg: any) => ({
        url: `/Orders/orders-for-store`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.orders],
    }),
    getAllOrderForDeliveryman: builder.query({
      query: (arg: any) => ({
        url: `/Orders/orders-for-deliveryman`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.orders],
    }),
    createOrder: builder.mutation({
      query: ({ data }: { data: any }) => ({
        url: `/Orders`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.orders],
    }),
    getSingleOrder: builder.query({
      query: (id: string) => ({
        url: `/Orders/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.orders],
    }),
    updateStatus: builder.mutation({
      query: ({ formData }: { formData: any }) => {
        return {
          url: `/Orders/update-status`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: [tagTypes.orders],
    }),
  }),
});

export const {
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useUpdateStatusMutation,
  useCreateOrderMutation,
  useGetAllOrderForStoreQuery,
  useGetAllOrderForDeliverymanQuery,
} = OrderApi;
