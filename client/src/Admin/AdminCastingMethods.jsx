import { useState } from "react"
import {
useGetAdminCastingMethodsQuery,
useCreateCastingMethodMutation,
useUpdateCastingMethodMutation,
useDeleteCastingMethodMutation
} from "../redux/apis/castingMethodApi"

export default function AdminCastingMethods(){

const {data:methods=[]} = useGetAdminCastingMethodsQuery()

const [createMethod] = useCreateCastingMethodMutation()
const [updateMethod] = useUpdateCastingMethodMutation()
const [deleteMethod] = useDeleteCastingMethodMutation()

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [image,setImage] = useState("")
const [features,setFeatures] = useState("")
const [editId,setEditId] = useState(null)



const submit = async(e)=>{

e.preventDefault()

const data = {
title,
description,
image,
features:features.split(",")
}

if(editId){

await updateMethod({id:editId,...data})
setEditId(null)

}else{

await createMethod(data)

}

setTitle("")
setDescription("")
setImage("")
setFeatures("")
}



const edit=(item)=>{

setTitle(item.title)
setDescription(item.description)
setImage(item.image)
setFeatures(item.features.join(","))
setEditId(item._id)

}



return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-8">
Casting Methods
</h1>



<form onSubmit={submit} className="bg-white p-6 rounded shadow mb-10">

<input
placeholder="Title"
value={title}
onChange={e=>setTitle(e.target.value)}
className="border p-3 w-full mb-3"
/>

<textarea
placeholder="Description"
value={description}
onChange={e=>setDescription(e.target.value)}
className="border p-3 w-full mb-3"
/>

<input
placeholder="Image URL"
value={image}
onChange={e=>setImage(e.target.value)}
className="border p-3 w-full mb-3"
/>

<input
placeholder="Features (comma separated)"
value={features}
onChange={e=>setFeatures(e.target.value)}
className="border p-3 w-full mb-3"
/>

<button className="bg-black text-white px-6 py-3 rounded">
{editId ? "Update" : "Add"}
</button>

</form>



<div className="grid md:grid-cols-3 gap-6">

{methods.map(item=>(
    
<div key={item._id} className="border rounded-lg p-4">

<img src={item.image} className="h-40 w-full object-cover rounded"/>

<h3 className="font-semibold mt-3">
{item.title}
</h3>

<div className="flex gap-3 mt-3">

<button
onClick={()=>edit(item)}
className="bg-blue-500 text-white px-3 py-2 rounded"
>
Edit
</button>

<button
onClick={()=>deleteMethod(item._id)}
className="bg-red-500 text-white px-3 py-2 rounded"
>
Delete
</button>

</div>

</div>

))}

</div>

</div>

)
}