import api from "../api";

const AuthApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    register: builder.mutation({
      query: (data: any) => ({
        url: `/store/create-store`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: any) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = AuthApi;
