import api from "../api";

const EventApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllEvents: builder.query({
      query: (params: {
        limit: number;
        page: number;
        Event_status: string;
        sortOrder: "desc" | "asc";
      }) => ({
        url: `/event`,
        method: "GET",
        params,
      }),
      providesTags: ["Event"],
    }),
    getAEvent: builder.query({
      query: ({ id }: { id: string }) => `/event/${id}`,
      providesTags: ["Event"],
    }),
    addEvents: builder.mutation({
      query: (data: any) => ({
        url: `/event`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),
    updateEvent: builder.mutation({
      query: ({ EventId, formData }: { EventId: string; formData: any }) => ({
        url: `/event/${EventId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Event"],
    }),
    deleteEvent: builder.mutation({
      query: (id: string) => ({
        url: `/event/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});

export const { useGetAllEventsQuery, useGetAEventQuery, useAddEventsMutation } =
  EventApi;
