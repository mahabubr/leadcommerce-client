import api from "../api";

const faqApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllFAQs: builder.query({
      query: (params: any) => ({
        url: `/faq`,
        method: "GET",
        params,
      }),
      providesTags: ["FAQ"],
    }),
    getAFAQ: builder.query({
      query: ({ id }: { id: string }) => `/faq/${id}`,
      providesTags: ["FAQ"],
    }),
    addFAQs: builder.mutation({
      query: (data: any) => ({
        url: `/faq/create-FAQ`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["FAQ"],
    }),
    updateFAQ: builder.mutation({
      query: ({ FAQId, formData }: { FAQId: string; formData: any }) => {
        console.log(FAQId, formData, "updatefaqapi");
        return {
          url: `/faq/${FAQId}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["FAQ"],
    }),
    deleteFAQ: builder.mutation({
      query: (id: string) => ({
        url: `/faq/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAQ"],
    }),
  }),
});

export const {
  useGetAllFAQsQuery,
  useGetAFAQQuery,
  useAddFAQsMutation,
  useUpdateFAQMutation,
} = faqApi;
