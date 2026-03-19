import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const careerApi = createApi({

reducerPath:"careerApi",

// baseQuery:fetchBaseQuery({
// baseUrl:"http://localhost:5000/api/careers",
// credentials:"include"
// }),
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
      ? import.meta.env.VITE_BACKEND_URL + "/api/careers"
      : "/api/careers",
    credentials: "include", 
  }),

tagTypes:["Career"],

endpoints:(builder)=>({


getPublicCareer:builder.query({
query:()=>"/public"
}),


getAdminCareer:builder.query({
query:()=>"/admin",
providesTags:["Career"]
}),


updateHero:builder.mutation({
query:(formData)=>({
url:"/hero",
method:"POST",
body:formData
}),
invalidatesTags:["Career"]
}),


addWhyJoin:builder.mutation({
query:(data)=>({
url:"/why",
method:"POST",
body:data
}),
invalidatesTags:["Career"]
}),


deleteWhyJoin:builder.mutation({
query:(id)=>({
url:`/why/${id}`,
method:"DELETE"
}),
invalidatesTags:["Career"]
}),


addJob:builder.mutation({
query:(data)=>({
url:"/job",
method:"POST",
body:data
}),
invalidatesTags:["Career"]
}),


deleteJob:builder.mutation({
query:(id)=>({
url:`/job/${id}`,
method:"DELETE"
}),
invalidatesTags:["Career"]
}),

updateWhyJoin:builder.mutation({
query:({id,data})=>({
url:`/why/${id}`,
method:"PUT",
body:data
}),
invalidatesTags:["Career"]
}),


updateJob:builder.mutation({
query:({id,data})=>({
url:`/job/${id}`,
method:"PUT",
body:data
}),
invalidatesTags:["Career"]
}),

})

})

export const {

useGetPublicCareerQuery,
useGetAdminCareerQuery,
useUpdateHeroMutation,
useAddWhyJoinMutation,
useDeleteWhyJoinMutation,
useAddJobMutation,
useDeleteJobMutation,
useUpdateWhyJoinMutation,
useUpdateJobMutation

} = careerApi