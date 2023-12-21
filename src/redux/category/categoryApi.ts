import api from "../api";
import { tagTypes } from "../types/tagTypes";

const categoryApi = api.injectEndpoints({
    endpoints: (builder: any) => ({

        getAllCategories: builder.query({
            query: () =>
                `/category`,
            providesTags: [tagTypes.category],
        }),

        addCategory: builder.mutation({
            query: (data: any) => ({
                url: `/category`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.category],
        }),

        updateCategory: builder.mutation({
            query: (data: any) => ({
                url: `/category/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: [tagTypes.category],
        }),

        deleteCategory: builder.mutation({
            query: (id: string) => ({
                url: `/category/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.category],
        }),
    }),
});

export const {
    useAddCategoryMutation,
    useDeleteCategoryMutation,
    useGetAllCategoriesMutation,
    useUpdateCategoryMutation
} = categoryApi;
