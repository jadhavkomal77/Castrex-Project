import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainNavbarApi = createApi({
  reducerPath: "mainNavbarApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_BACKEND_URL
        ? `${import.meta.env.VITE_BACKEND_URL}/api/main-navbar`
        : "/api/main-navbar",
    credentials: "include",
  }),

  tagTypes: ["MainNavbar"],

  endpoints: (builder) => ({

    /* =====================
       🌍 PUBLIC NAVBAR
    ===================== */
    getPublicMainNavbar: builder.query({
      query: () => ({
        url: "/public",
        method: "GET",
      }),
      providesTags: ["MainNavbar"],
    }),

    /* =====================
       🔐 ADMIN NAVBAR
    ===================== */
    getAdminMainNavbar: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["MainNavbar"],
    }),

    /* =====================
       CREATE NAVBAR
    ===================== */
    createMainNavbar: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MainNavbar"],
    }),

    /* =====================
       UPDATE NAVBAR
    ===================== */
    updateMainNavbar: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["MainNavbar"],
    }),

    /* =====================
       DELETE NAVBAR
    ===================== */
    deleteMainNavbar: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MainNavbar"],
    }),

  }),
});

export const {
  useGetPublicMainNavbarQuery,
  useGetAdminMainNavbarQuery,
  useCreateMainNavbarMutation,
  useUpdateMainNavbarMutation,
  useDeleteMainNavbarMutation,
} = mainNavbarApi;