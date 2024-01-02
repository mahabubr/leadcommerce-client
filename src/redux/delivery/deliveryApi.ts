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
      query: ({ id }: { id: string }) => `/delivery/${id}`,
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
      query: ({
        DeliveryId,
        formData,
      }: {
        DeliveryId: string;
        formData: any;
      }) => ({
        url: `/delivery/${DeliveryId}`,
        method: "PUT",
        body: formData,
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
  }),
});

export const {
  useGetAllDeliverysQuery,
  useGetADeliveryQuery,
  useAddDeliverysMutation,
  useUpdateDeliveryMutation,
  useDeleteDeliveryMutation,
} = deliveryApi;
