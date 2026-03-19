
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const capabilityApi = createApi({

  reducerPath: "capabilityApi",
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BACKEND_URL
        ? import.meta.env.VITE_BACKEND_URL + "/api/capabilities"
        : "/api/capabilities",
      credentials: "include", 
    }),


  tagTypes: ["Capability"],

  endpoints: (builder) => ({

    /* ---------------- PUBLIC ---------------- */

    getPublicCapabilities: builder.query({
      query: () => "/public",
      providesTags: ["Capability"]
    }),

    getCapabilityDetail: builder.query({
      query: (slug) => `/detail/${slug}`,
      providesTags: ["Capability"]
    }),

    /* ---------------- ADMIN ---------------- */

    getAdminCapabilities: builder.query({
      query: () => "/admin",
      providesTags: ["Capability"]
    }),

    createCapability: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData
      }),
      invalidatesTags: ["Capability"]
    }),

    updateCapability: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData
      }),
      invalidatesTags: ["Capability"]
    }),

    deleteCapability: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Capability"]
    })

  })

})

export const {
  /* PUBLIC */
  useGetPublicCapabilitiesQuery,
  useGetCapabilityDetailQuery,

  /* ADMIN */
  useGetAdminCapabilitiesQuery,
  useCreateCapabilityMutation,
  useUpdateCapabilityMutation,
  useDeleteCapabilityMutation

} = capabilityApi