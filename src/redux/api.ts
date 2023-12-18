import { BaseUrl } from "@/constants/base-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./types/tagTypes";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});

export default api;
