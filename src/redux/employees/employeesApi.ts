import api from "../api";

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
      providesTags: ["Employe"],
    }),
    getAEmploye: builder.query({
      query: ({ id }: { id: string }) => `/employee/${id}`,
      providesTags: ["Employe"],
    }),
    addEmployes: builder.mutation({
      query: (data: any) => ({
        url: `/employee/create-employe`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Employe"],
    }),
    updateEmploye: builder.mutation({
      query: ({
        EmployeId,
        formData,
      }: {
        EmployeId: string;
        formData: any;
      }) => ({
        url: `/employee/${EmployeId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Employe"],
    }),
    deleteEmploye: builder.mutation({
      query: (id: string) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employe"],
    }),
  }),
});

export const {
  useGetAllEmployesQuery,
  useGetAEmployeQuery,
  useAddEmployesMutation,
} = EmployeApi;
