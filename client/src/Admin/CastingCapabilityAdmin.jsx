
import { useState } from "react"
import {
  useCreateCapabilityMutation,
  useDeleteCapabilityMutation,
  useGetAdminCapabilitiesQuery,
  useUpdateCapabilityMutation
} from "../redux/apis/castingCapabilityApi"

export default function CapabilityAdmin(){

const {data=[],isLoading,error} = useGetAdminCapabilitiesQuery()

const [createItem] = useCreateCapabilityMutation()
const [updateItem] = useUpdateCapabilityMutation()
const [deleteItem] = useDeleteCapabilityMutation()

const [editingId,setEditingId] = useState(null)

const [heroImage,setHeroImage] = useState(null)
const [overviewImage,setOverviewImage] = useState(null)

const [form,setForm] = useState({
title:"",
slug:"",
icon:"",
category:"casting",
order:0,

heroTitle:"",
heroSubtitle:"",
heroDescription:"",
heroVideo:"",

overviewTitle:"",
overviewDescription:"",

sections:[],

metaTitle:"",
metaDescription:"",
metaKeywords:""
})

/* INPUT */
const handleChange=(e)=>{
const {name,value}=e.target
setForm({...form,[name]:value})
}

/* ADD SECTION */
const addSection=()=>{
setForm({
...form,
sections:[
...form.sections,
{
sectionType:"features",
title:"",
items:[],
steps:[],
gallery:[],
cta:{}
}
]
})
}

/* UPDATE SECTION */
const updateSection=(i,key,value)=>{
const updated=[...form.sections]
updated[i][key]=value
setForm({...form,sections:updated})
}

/* REMOVE SECTION */
const removeSection=(i)=>{
const updated=[...form.sections]
updated.splice(i,1)
setForm({...form,sections:updated})
}

/* RESET */
const resetForm=()=>{
setEditingId(null)
setHeroImage(null)
setOverviewImage(null)

setForm({
title:"",
slug:"",
icon:"",
category:"casting",
order:0,
heroTitle:"",
heroSubtitle:"",
heroDescription:"",
heroVideo:"",
overviewTitle:"",
overviewDescription:"",
sections:[],
metaTitle:"",
metaDescription:"",
metaKeywords:""
})
}

/* SUBMIT */
const handleSubmit=async(e)=>{
e.preventDefault()

const formData=new FormData()

Object.keys(form).forEach(key=>{
if(key==="sections"){
formData.append("sections",JSON.stringify(form.sections))
}else{
formData.append(key,form[key])
}
})

if(heroImage) formData.append("heroImage",heroImage)
if(overviewImage) formData.append("overviewImage",overviewImage)

try{
if(editingId){
await updateItem({id:editingId,formData}).unwrap()
}else{
await createItem(formData).unwrap()
}
resetForm()
}catch(err){
console.log(err)
alert("Error saving")
}
}

/* EDIT */
const handleEdit=(item)=>{
setEditingId(item._id)

setForm({
title:item.title || "",
slug:item.slug || "",
icon:item.icon || "",
category:item.category || "casting",
order:item.order || 0,

heroTitle:item.hero?.title || "",
heroSubtitle:item.hero?.subtitle || "",
heroDescription:item.hero?.description || "",
heroVideo:item.hero?.video || "",

overviewTitle:item.overview?.title || "",
overviewDescription:item.overview?.description || "",

sections:item.sections || [],

metaTitle:item.seo?.metaTitle || "",
metaDescription:item.seo?.metaDescription || "",
metaKeywords:item.seo?.metaKeywords?.join(",") || ""
})
}

/* DELETE */
const handleDelete=(id)=>{
if(!confirm("Delete?")) return
deleteItem(id)
}

/* UI */
if(isLoading) return <p>Loading...</p>
if(error) return <p>Error</p>

return(

<div className="max-w-7xl mx-auto p-10">

<h1 className="text-3xl font-bold mb-10">
Capability Admin (Advanced)
</h1>

<form onSubmit={handleSubmit} className="space-y-8">

{/* BASIC */}
<div className="grid md:grid-cols-2 gap-4">

<input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-3"/>

<input name="slug" placeholder="Slug" value={form.slug} onChange={handleChange} className="border p-3"/>

<input name="icon" placeholder="Icon" value={form.icon} onChange={handleChange} className="border p-3"/>

<input type="number" name="order" value={form.order} onChange={handleChange} className="border p-3"/>

</div>

{/* HERO */}
<div>
<h2 className="font-bold text-xl mb-2">Hero</h2>
<input name="heroTitle" placeholder="Hero Title" value={form.heroTitle} onChange={handleChange} className="border p-3 w-full mb-2"/>
<textarea name="heroDescription" placeholder="Hero Desc" value={form.heroDescription} onChange={handleChange} className="border p-3 w-full mb-2"/>
<input type="file" onChange={(e)=>setHeroImage(e.target.files[0])}/>
</div>

{/* SECTIONS */}
<div>

<h2 className="font-bold text-xl">Sections</h2>

<button type="button" onClick={addSection} className="bg-black text-white px-4 py-2 mb-4">
Add Section
</button>

{form.sections.map((s,i)=>(

<div key={i} className="border p-4 mb-4 bg-gray-50">

<select value={s.sectionType} onChange={(e)=>updateSection(i,"sectionType",e.target.value)} className="border p-2 mb-2">
<option value="features">Features</option>
<option value="process">Process</option>
<option value="gallery">Gallery</option>
<option value="cta">CTA</option>
</select>

<input placeholder="Title" value={s.title} onChange={(e)=>updateSection(i,"title",e.target.value)} className="border p-2 w-full mb-2"/>

{/* FEATURES */}
{s.sectionType==="features" && (
<div>
<button type="button" onClick={()=>{
const updated=[...form.sections]
updated[i].items=[...(updated[i].items||[]),{title:"",description:""}]
setForm({...form,sections:updated})
}} className="bg-blue-500 text-white px-2 py-1 mb-2">
Add Item
</button>

{s.items?.map((item,idx)=>(
<div key={idx} className="flex gap-2 mb-2">
<input value={item.title} onChange={(e)=>{
const updated=[...form.sections]
updated[i].items[idx].title=e.target.value
setForm({...form,sections:updated})
}} className="border p-2"/>

<input value={item.description} onChange={(e)=>{
const updated=[...form.sections]
updated[i].items[idx].description=e.target.value
setForm({...form,sections:updated})
}} className="border p-2"/>
</div>
))}
</div>
)}

{/* PROCESS */}
{s.sectionType==="process" && (
<div>
<button type="button" onClick={()=>{
const updated=[...form.sections]
updated[i].steps=[...(updated[i].steps||[]),{
step:(updated[i].steps?.length||0)+1,
title:"",
description:""
}]
setForm({...form,sections:updated})
}} className="bg-green-500 text-white px-2 py-1 mb-2">
Add Step
</button>

{s.steps?.map((step,idx)=>(
<div key={idx} className="flex gap-2 mb-2">
<input type="number" value={step.step} onChange={(e)=>{
const updated=[...form.sections]
updated[i].steps[idx].step=Number(e.target.value)
setForm({...form,sections:updated})
}} className="border p-2 w-20"/>

<input value={step.title} onChange={(e)=>{
const updated=[...form.sections]
updated[i].steps[idx].title=e.target.value
setForm({...form,sections:updated})
}} className="border p-2"/>

<input value={step.description} onChange={(e)=>{
const updated=[...form.sections]
updated[i].steps[idx].description=e.target.value
setForm({...form,sections:updated})
}} className="border p-2"/>
</div>
))}
</div>
)}

{/* CTA */}
{s.sectionType==="cta" && (
<div>
<input value={s.cta?.title||""} onChange={(e)=>{
const updated=[...form.sections]
updated[i].cta={...updated[i].cta,title:e.target.value}
setForm({...form,sections:updated})
}} className="border p-2 w-full mb-2"/>

<input value={s.cta?.buttonText||""} onChange={(e)=>{
const updated=[...form.sections]
updated[i].cta={...updated[i].cta,buttonText:e.target.value}
setForm({...form,sections:updated})
}} className="border p-2 w-full"/>
</div>
)}

<button type="button" onClick={()=>removeSection(i)} className="text-red-600 mt-2">
Delete Section
</button>

</div>

))}

</div>

<button className="bg-blue-600 text-white px-6 py-3">
{editingId ? "Update" : "Create"}
</button>

</form>

{/* LIST */}
<div className="grid md:grid-cols-3 gap-6 mt-10">
{data.map(item=>(
<div key={item._id} className="border p-4">
<h3 className="font-bold">{item.title}</h3>
<button onClick={()=>handleEdit(item)} className="text-blue-600 mr-3">Edit</button>
<button onClick={()=>handleDelete(item._id)} className="text-red-600">Delete</button>
</div>
))}
</div>

</div>
)
}