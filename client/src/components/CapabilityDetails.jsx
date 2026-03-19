
import { useParams } from "react-router-dom"
import { useGetCapabilityDetailQuery } from "../redux/apis/castingCapabilityApi"

export default function CapabilityDetails(){

const {slug} = useParams()

const {data,isLoading} = useGetCapabilityDetailQuery(slug)

if(isLoading) return <p className="p-10">Loading...</p>
if(!data) return <p className="p-10">Not Found</p>

return(

<div>

{/* HERO */}

<section className="relative h-[500px]">

<img
src={data.hero?.image}
className="w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center">

<div className="text-center text-white px-4">

<h1 className="text-5xl font-bold mb-4">
{data.hero?.title}
</h1>

<p className="max-w-2xl mx-auto">
{data.hero?.description}
</p>

</div>

</div>

</section>

{/* OVERVIEW */}

<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

<div>

<h2 className="text-3xl font-bold mb-4">
{data.overview?.title}
</h2>

<p className="text-gray-600">
{data.overview?.description}
</p>

</div>

<img
src={data.overview?.image}
className="w-full rounded-xl"
/>

</section>

{/* DYNAMIC SECTIONS */}

{data.sections?.map((sec,i)=>{

switch(sec.sectionType){

/* FEATURES */

case "features":
return(
<section key={i} className="bg-gray-100 py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold mb-10 text-center">
{sec.title}
</h2>

<div className="grid md:grid-cols-3 gap-6">

{sec.items?.map((item,idx)=>(
<div key={idx} className="bg-white p-6 rounded-xl shadow">

<h3 className="font-bold text-lg mb-2">
{item.title}
</h3>

<p className="text-gray-600">
{item.desc}
</p>

</div>
))}

</div>

</div>

</section>
)

/* PROCESS */

case "process":
return(
<section key={i} className="py-16">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-3xl font-bold mb-10 text-center">
{sec.title}
</h2>

{sec.steps?.map((step,idx)=>(
<div key={idx} className="flex gap-6 mb-8">

<div className="text-2xl font-bold text-red-600">
{step.step}
</div>

<div>
<h3 className="font-bold">{step.title}</h3>
<p className="text-gray-600">{step.desc}</p>
</div>

</div>
))}

</div>

</section>
)

/* GALLERY */

case "gallery":
return(
<section key={i} className="py-16 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold mb-10 text-center">
{sec.title}
</h2>

<div className="grid md:grid-cols-4 gap-4">

{sec.gallery?.map((img,idx)=>(
<img
key={idx}
src={img.image}
className="w-full h-52 object-cover rounded-lg"
/>
))}

</div>

</div>

</section>
)

/* CTA */

case "cta":
return(
<section key={i} className="py-20 bg-red-600 text-white text-center">

<h2 className="text-3xl font-bold mb-4">
{sec.cta?.title}
</h2>

<button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold">
{sec.cta?.buttonText}
</button>

</section>
)

default:
return null

}

})}

</div>

)

}