import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const topNavbarApi = createApi({
  reducerPath: "topNavbarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
      ? import.meta.env.VITE_BACKEND_URL + "/api/top-navbar"
      : "/api/top-navbar",
    credentials: "include",
  }),

  tagTypes: ["TopNavbar"],

  endpoints: (builder) => ({

    /* 🌍 PUBLIC */
    getPublicTopNavbar: builder.query({
      query: () => "/public",
      providesTags: ["TopNavbar"],
    }),

    /* 🔐 ADMIN */
    getAdminTopNavbar: builder.query({
      query: () => "/admin",
      providesTags: ["TopNavbar"],
    }),

    /* CREATE */
    createTopNavbar: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["TopNavbar"],
    }),

    /* UPDATE */
    updateTopNavbar: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["TopNavbar"],
    }),

    /* DELETE */
    deleteTopNavbar: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TopNavbar"],
    }),

  }),
});

export const {
  useGetPublicTopNavbarQuery,
  useGetAdminTopNavbarQuery,
  useCreateTopNavbarMutation,
  useUpdateTopNavbarMutation,
  useDeleteTopNavbarMutation,
} = topNavbarApi;