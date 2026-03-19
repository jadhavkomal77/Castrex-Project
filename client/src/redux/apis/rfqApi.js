import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rfqApi = createApi({

reducerPath:"rfqApi",

baseQuery:fetchBaseQuery({
baseUrl:import.meta.env.VITE_BACKEND_URL
? `${import.meta.env.VITE_BACKEND_URL}/api/rfq`
: "/api/rfq",
credentials:"include"
}),

tagTypes:["RFQ"],

endpoints:(builder)=>({

getAdminRfq:builder.query({
query:()=>"/admin",
providesTags:["RFQ"]
}),

createRfq:builder.mutation({
query:(data)=>({
url:"/create",
method:"POST",
body:data
}),
invalidatesTags:["RFQ"]
}),

updateRfq:builder.mutation({
query:({id,data})=>({
url:`/admin/${id}`,
method:"PUT",
body:data
}),
invalidatesTags:["RFQ"]
}),

deleteRfq:builder.mutation({
query:(id)=>({
url:`/admin/${id}`,
method:"DELETE"
}),
invalidatesTags:["RFQ"]
})

})

})

export const {
useGetAdminRfqQuery,
useCreateRfqMutation,
useUpdateRfqMutation,
useDeleteRfqMutation
} = rfqApi