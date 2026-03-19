import { useState } from "react";

import {
useGetAdminCareerQuery,
useUpdateHeroMutation,
useAddWhyJoinMutation,
useDeleteWhyJoinMutation,
useAddJobMutation,
useDeleteJobMutation,
useUpdateWhyJoinMutation,
useUpdateJobMutation
} from "../redux/apis/careerApi";

export default function AdminCareers(){

const {data,isLoading} = useGetAdminCareerQuery()

const [updateHero] = useUpdateHeroMutation()

const [addWhyJoin] = useAddWhyJoinMutation()
const [deleteWhyJoin] = useDeleteWhyJoinMutation()
const [updateWhyJoin] = useUpdateWhyJoinMutation()

const [addJob] = useAddJobMutation()
const [deleteJob] = useDeleteJobMutation()
const [updateJob] = useUpdateJobMutation()

const career = data?.career



/* HERO */

const [hero,setHero] = useState({
title:"",
subtitle:"",
image:null
})

const handleHeroSubmit = async(e)=>{
e.preventDefault()

const formData = new FormData()

formData.append("title",hero.title || career?.hero?.title)
formData.append("subtitle",hero.subtitle || career?.hero?.subtitle)

if(hero.image){
formData.append("image",hero.image)
}

await updateHero(formData)

alert("Hero Updated")
}



/* WHY JOIN */

const [why,setWhy] = useState({
icon:"",
title:"",
description:""
})

const [editingWhy,setEditingWhy] = useState(null)

const handleWhySubmit = async(e)=>{
e.preventDefault()

if(editingWhy){

await updateWhyJoin({
id:editingWhy,
data:why
})

setEditingWhy(null)

}else{

await addWhyJoin(why)

}

setWhy({
icon:"",
title:"",
description:""
})

}



/* JOB */

const [job,setJob] = useState({
title:"",
department:"",
location:"",
description:""
})

const [editingJob,setEditingJob] = useState(null)

const handleJobSubmit = async(e)=>{
e.preventDefault()

if(editingJob){

await updateJob({
id:editingJob,
data:job
})

setEditingJob(null)

}else{

await addJob(job)

}

setJob({
title:"",
department:"",
location:"",
description:""
})

}



if(isLoading) return <p className="p-10">Loading...</p>


return(

<div className="p-10 space-y-12 max-w-7xl mx-auto">

<h1 className="text-3xl font-bold">
Careers Admin Panel
</h1>



{/* HERO SECTION */}

<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-semibold mb-4">
Hero Section
</h2>

<form onSubmit={handleHeroSubmit} className="space-y-4">

<input
placeholder="Hero Title"
defaultValue={career?.hero?.title}
className="border p-3 w-full rounded"
onChange={(e)=>setHero({...hero,title:e.target.value})}
/>

<input
placeholder="Hero Subtitle"
defaultValue={career?.hero?.subtitle}
className="border p-3 w-full rounded"
onChange={(e)=>setHero({...hero,subtitle:e.target.value})}
/>

<input
type="file"
onChange={(e)=>setHero({...hero,image:e.target.files[0]})}
/>

{career?.hero?.image && (
<img
src={career.hero.image}
className="w-60 rounded"
/>
)}

<button className="bg-red-600 text-white px-6 py-3 rounded">
Update Hero
</button>

</form>

</div>



{/* WHY JOIN */}

<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-semibold mb-4">
Why Join Cards
</h2>

<form onSubmit={handleWhySubmit} className="grid grid-cols-3 gap-4 mb-6">

<input
value={why.icon}
placeholder="Icon (emoji)"
className="border p-3 rounded"
onChange={(e)=>setWhy({...why,icon:e.target.value})}
/>

<input
value={why.title}
placeholder="Title"
className="border p-3 rounded"
onChange={(e)=>setWhy({...why,title:e.target.value})}
/>

<input
value={why.description}
placeholder="Description"
className="border p-3 rounded"
onChange={(e)=>setWhy({...why,description:e.target.value})}
/>

<button className="col-span-3 bg-red-600 text-white py-3 rounded">
{editingWhy ? "Update Card" : "Add Card"}
</button>

</form>



<div className="grid grid-cols-4 gap-4">

{career?.whyJoin?.map((item)=>(
<div key={item._id} className="border p-4 rounded">

<p className="text-2xl">{item.icon}</p>

<h3 className="font-semibold">{item.title}</h3>

<p className="text-sm text-gray-500">
{item.description}
</p>

<div className="flex gap-3 mt-2">

<button
onClick={()=>{
setEditingWhy(item._id)
setWhy({
icon:item.icon,
title:item.title,
description:item.description
})
}}
className="text-blue-600"
>
Edit
</button>

<button
onClick={()=>deleteWhyJoin(item._id)}
className="text-red-600"
>
Delete
</button>

</div>

</div>
))}

</div>

</div>



{/* JOBS */}

<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-semibold mb-4">
Jobs
</h2>

<form onSubmit={handleJobSubmit} className="grid grid-cols-2 gap-4 mb-6">

<input
value={job.title}
placeholder="Job Title"
className="border p-3 rounded"
onChange={(e)=>setJob({...job,title:e.target.value})}
/>

<input
value={job.department}
placeholder="Department"
className="border p-3 rounded"
onChange={(e)=>setJob({...job,department:e.target.value})}
/>

<input
value={job.location}
placeholder="Location"
className="border p-3 rounded"
onChange={(e)=>setJob({...job,location:e.target.value})}
/>

<input
value={job.description}
placeholder="Description"
className="border p-3 rounded"
onChange={(e)=>setJob({...job,description:e.target.value})}
/>

<button className="col-span-2 bg-red-600 text-white py-3 rounded">
{editingJob ? "Update Job" : "Add Job"}
</button>

</form>



<table className="w-full border">

<thead className="bg-gray-100">

<tr>
<th className="p-3">Title</th>
<th>Department</th>
<th>Location</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{career?.jobs?.map((job)=>(
<tr key={job._id} className="border-t">

<td className="p-3">{job.title}</td>
<td>{job.department}</td>
<td>{job.location}</td>

<td className="space-x-3">

<button
onClick={()=>{
setEditingJob(job._id)
setJob({
title:job.title,
department:job.department,
location:job.location,
description:job.description
})
}}
className="text-blue-600"
>
Edit
</button>

<button
onClick={()=>deleteJob(job._id)}
className="text-red-600"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)
}