import api from "../api";

const deliveryApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllDeliverys: builder.query({
      query: (params: any) => ({
        url: `/delivery`,
        method: "GET",
        params,
      }),
      providesTags: ["Delivery"],
    }),
    getADelivery: builder.query({
      query: () => `/delivery/single`,
      providesTags: ["Delivery"],
    }),
    addDeliverys: builder.mutation({
      query: (data: any) => ({
        url: `/delivery/create-Delivery`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Delivery"],
    }),
    updateDelivery: builder.mutation({
      query: (data: any) => ({
        url: `/delivery/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Delivery"],
    }),
    deleteDelivery: builder.mutation({
      query: (id: string) => ({
        url: `/delivery/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Delivery"],
    }),
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

export const {
  useGetAllDeliverysQuery,
  useGetADeliveryQuery,
  useAddDeliverysMutation,
  useUpdateDeliveryMutation,
  useDeleteDeliveryMutation,
  useCreateDeliveryMutation,
} = deliveryApi;
