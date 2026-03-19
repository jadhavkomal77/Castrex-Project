import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const engineeringSupportApi = createApi({

  reducerPath: "engineeringSupportApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
      ? `${import.meta.env.VITE_BACKEND_URL}/api/engineering-support`
      : "/api/engineering-support",
    credentials: "include",
  }),

  tagTypes: ["EngineeringSupport"],

  endpoints: (builder) => ({

    /* PUBLIC */

    getPublicEngineeringSupport: builder.query({
      query: () => "/public",
      providesTags: ["EngineeringSupport"],
    }),

    /* ADMIN */

    getAdminEngineeringSupport: builder.query({
      query: () => "/admin",
      providesTags: ["EngineeringSupport"],
    }),

    /* CREATE */

    createEngineeringSupport: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["EngineeringSupport"],
    }),

    /* UPDATE */

    updateEngineeringSupport: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["EngineeringSupport"],
    }),

    /* DELETE */

    deleteEngineeringSupport: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EngineeringSupport"],
    }),

  }),

});

export const {

  useGetPublicEngineeringSupportQuery,
  useGetAdminEngineeringSupportQuery,

  useCreateEngineeringSupportMutation,
  useUpdateEngineeringSupportMutation,
  useDeleteEngineeringSupportMutation,

} = engineeringSupportApi;