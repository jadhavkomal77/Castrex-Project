// redux/apis/aboutApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutApi = createApi({
  reducerPath: "aboutApi",

    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL + "/api/about"
        : "/api/about",
      credentials: "include", 
    }),

  tagTypes: ["About"],

  endpoints: (builder) => ({

    /* 🌍 PUBLIC ABOUT */

    getPublicAbout: builder.query({
      query: () => "/public",
      providesTags: ["About"],
    }),

    /* 🔐 ADMIN ABOUT */

    getAdminAbout: builder.query({
      query: () => "/",
      providesTags: ["About"],
    }),

    /* 🔐 SAVE ABOUT */

    saveAbout: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["About"],
    }),

  }),
});

export const {
  useGetPublicAboutQuery,
  useGetAdminAboutQuery,
  useSaveAboutMutation,
} = aboutApi;