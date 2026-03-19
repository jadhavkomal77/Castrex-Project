import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const castingMethodApi = createApi({

reducerPath:"castingMethodApi",

baseQuery: fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL
    ? `${import.meta.env.VITE_BACKEND_URL}/api/casting-methods`
    : "/api/casting-methods",
  credentials: "include",
}),

tagTypes:["CastingMethod"],

endpoints:(builder)=>({

getPublicCastingMethods:builder.query({
query:()=>"/public",
providesTags:["CastingMethod"]
}),

getAdminCastingMethods:builder.query({
query:()=>"/admin",
providesTags:["CastingMethod"]
}),

createCastingMethod:builder.mutation({
query:(data)=>({
url:"/",
method:"POST",
body:data
}),
invalidatesTags:["CastingMethod"]
}),

updateCastingMethod:builder.mutation({
query:({id,...data})=>({
url:`/${id}`,
method:"PUT",
body:data
}),
invalidatesTags:["CastingMethod"]
}),

deleteCastingMethod:builder.mutation({
query:(id)=>({
url:`/${id}`,
method:"DELETE"
}),
invalidatesTags:["CastingMethod"]
})

})

})

export const {

useGetPublicCastingMethodsQuery,
useGetAdminCastingMethodsQuery,
useCreateCastingMethodMutation,
useUpdateCastingMethodMutation,
useDeleteCastingMethodMutation

} = castingMethodApi