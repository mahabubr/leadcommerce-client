import api from "../api";
import { tagTypes } from "../types/tagTypes";

const EmployeApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getAllEmployes: builder.query({
      query: (params: {
        limit: number;
        page: number;
        Employe_status: string;
        sortOrder: "desc" | "asc";
      }) => ({
        url: `/employee`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.employe],
    }),
    getAEmploye: builder.query({
      query: () => `/employee/single`,
      providesTags: [tagTypes.employe],
    }),
    addEmployes: builder.mutation({
      query: (data: any) => ({
        url: `/employee/create-employe`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.employe],
    }),
    updateEmploye: builder.mutation({
      query: (data: any) => ({
        url: `/employee/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.employe],
    }),
    deleteEmploye: builder.mutation({
      query: (id: string) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.employe],
    }),
  }),
});

export const {
  useGetAllEmployesQuery,
  useGetAEmployeQuery,
  useAddEmployesMutation,
  useUpdateEmployeMutation,
} = EmployeApi;
