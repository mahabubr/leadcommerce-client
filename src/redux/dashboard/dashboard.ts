import api from "../api";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllDashboardData: builder.query({
      query: () => ({
        url: `/dashboard`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDashboardDataQuery } = dashboardApi;
