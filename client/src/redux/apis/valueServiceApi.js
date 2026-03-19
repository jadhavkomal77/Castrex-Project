import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const valueServiceApi = createApi({

  reducerPath: "valueServiceApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
      ? `${import.meta.env.VITE_BACKEND_URL}/api/value-services`
      : "/api/value-services",
    credentials: "include",
  }),

  tagTypes: ["ValueService"],

  endpoints: (builder) => ({

    /* PUBLIC */

    getPublicValueServices: builder.query({
      query: () => "/public",
      providesTags: ["ValueService"],
    }),

    /* ADMIN */

    getAdminValueServices: builder.query({
      query: () => "/admin",
      providesTags: ["ValueService"],
    }),

    /* CREATE */

    createValueService: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["ValueService"],
    }),

    /* UPDATE */

    updateValueService: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["ValueService"],
    }),

    /* DELETE */

    deleteValueService: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ValueService"],
    }),

  }),

});

export const {

  useGetPublicValueServicesQuery,
  useGetAdminValueServicesQuery,

  useCreateValueServiceMutation,
  useUpdateValueServiceMutation,
  useDeleteValueServiceMutation,

} = valueServiceApi;