import { useState } from "react";
import {
  useGetAdminValueServicesQuery,
  useCreateValueServiceMutation,
  useUpdateValueServiceMutation,
  useDeleteValueServiceMutation
} from "../redux/apis/valueServiceApi";

export default function ValueServiceAdmin(){

const {data=[],isLoading}=useGetAdminValueServicesQuery();

const [createItem]=useCreateValueServiceMutation();
const [updateItem]=useUpdateValueServiceMutation();
const [deleteItem]=useDeleteValueServiceMutation();

const [editingId,setEditingId]=useState(null);

const [form,setForm]=useState({
title:"",
description:"",
order:0,
image:null
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleImage=(e)=>{
setForm({...form,image:e.target.files[0]});
};

const resetForm=()=>{
setForm({title:"",description:"",order:0,image:null});
setEditingId(null);
};

const handleSubmit=async(e)=>{
e.preventDefault();

const formData=new FormData();

formData.append("title",form.title);
formData.append("description",form.description);
formData.append("order",form.order);

if(form.image){
formData.append("image",form.image);
}

if(editingId){
await updateItem({id:editingId,formData});
}else{
await createItem(formData);
}

resetForm();
};

if(isLoading) return null;

return(

<div className="p-8 max-w-5xl mx-auto">

<h1 className="text-2xl font-bold mb-6">
Value Services
</h1>

{/* Form */}
<form onSubmit={handleSubmit} className="space-y-4 mb-10">

<input
name="title"
placeholder="Title"
value={form.title}
onChange={handleChange}
className="border p-2 w-full"
/>

<textarea
name="description"
placeholder="Description"
value={form.description}
onChange={handleChange}
className="border p-2 w-full"
/>

<input
type="number"
name="order"
value={form.order}
onChange={handleChange}
className="border p-2 w-full"
/>

<input type="file" onChange={handleImage}/>

<button className="bg-black text-white px-6 py-2">
{editingId ? "Update" : "Create"}
</button>

</form>

{/* List */}

{data.map(item=>(
<div key={item._id} className="border p-4 flex justify-between mb-4">

<div>
<h2 className="font-semibold">{item.title}</h2>
<p className="text-sm text-gray-600">{item.description}</p>
</div>

<div className="flex gap-4">

<button
onClick={()=>{
setEditingId(item._id)
setForm({
title:item.title,
description:item.description,
order:item.order
})
}}
className="text-blue-600"
>
Edit
</button>

<button
onClick={()=>deleteItem(item._id)}
className="text-red-600"
>
Delete
</button>

</div>

</div>
))}

</div>

);

}