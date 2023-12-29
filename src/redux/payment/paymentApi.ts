import api from "../api";
import { tagTypes } from "../types/tagTypes";

const paymentApi: any = api.injectEndpoints({
    endpoints: (builder: any) => ({

        getAllPayments: builder.query({
            query: ({
                limit,
                page,
                sortOrder,
            }: {
                limit: number;
                page: number;
                sortOrder: "desc" | "asc";
            }) => `/payment?page=${page}&limit=${limit}&sortOrder=${sortOrder}`,
            providesTags: [tagTypes.payments],
        }),


        getPayment: builder.query({
            query: ({ id }: { id: string }) => `/payment/${id}`,
            providesTags: [tagTypes.payments],
        }),

    }),
});

export const {
    useGetAllPaymentsQuery,
    useGetPaymentQuery,
} = paymentApi;
