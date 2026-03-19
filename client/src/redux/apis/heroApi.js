import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heroApi = createApi({

  reducerPath: "heroApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
      ? `${import.meta.env.VITE_BACKEND_URL}/api/hero`
      : "/api/hero",
    credentials: "include",
  }),

  tagTypes: ["Hero"],

  endpoints: (builder) => ({

    /* ======================
       🌍 PUBLIC HERO
    ====================== */

    getPublicHero: builder.query({
      query: () => "/public",
      providesTags: ["Hero"],
    }),

    /* ======================
       🔐 ADMIN HERO
    ====================== */

    getAdminHero: builder.query({
      query: () => "/admin",
      providesTags: ["Hero"],
    }),

    /* ======================
       CREATE / UPDATE HERO
    ====================== */

    saveHero: builder.mutation({
      query: (formData) => ({
        url: "/save",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Hero"],
    }),

    /* ======================
       DELETE HERO
    ====================== */

    deleteHero: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Hero"],
    }),

  }),

});

export const {
  useGetPublicHeroQuery,
  useGetAdminHeroQuery,
  useSaveHeroMutation,
  useDeleteHeroMutation,
} = heroApi;