import api from "../api";

const deliveryApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    // * Create delivery
    createDelivery: builder.mutation({
      query: (data: any) => ({
        url: `/delivery/create-delivery`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Employe"],
    }),
    // * Get All Delivery
    getAllDelivery: builder.query({
      query: (arg: any) => ({
        url: `/delivery`,
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useCreateDeliveryMutation, useGetAllDeliveryQuery } =
  deliveryApi;
