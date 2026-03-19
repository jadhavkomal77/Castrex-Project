import { useGetPublicCastingMethodsQuery } from "../redux/apis/castingMethodApi";

export default function CastingMethods() {

const { data:methods=[], isLoading } = useGetPublicCastingMethodsQuery();

if(isLoading) return <div className="p-20 text-center">Loading...</div>;

return(

<div>

{/* HERO */}

<section className="bg-red-700 text-white py-24">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-5xl font-bold mb-6">
Aluminium Casting Technologies
</h1>

<p className="max-w-3xl text-lg">
Advanced die casting capabilities delivering precision aluminium components
for demanding automotive and industrial applications. Our integrated
manufacturing approach combines multiple casting technologies to meet
diverse customer requirements.
</p>

</div>

</section>



{/* METHODS */}

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6 space-y-12">

{methods.map((item)=>(
    
<div
key={item._id}
className="bg-white rounded-xl shadow-lg p-10 grid md:grid-cols-2 gap-10"
>

<div>

<h2 className="text-3xl font-bold mb-4">
{item.title}
</h2>

<p className="text-gray-600 mb-6">
{item.description}
</p>

<ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">

{item.features?.map((f,i)=>(
<li key={i}>• {f}</li>
))}

</ul>

<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg">
Learn More →
</button>

</div>

<div>

<img
src={item.image}
alt={item.title}
className="rounded-lg w-full"
/>

</div>

</div>

))}

</div>

</section>



{/* INDUSTRIES */}

<section className="bg-[#EAD5C6] py-20">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-semibold mb-4">
Industries Served
</h2>

<p className="text-gray-600 mb-12">
Delivering precision components across multiple sectors
</p>

<div className="grid md:grid-cols-3 gap-6">

{[
"Automotive OEMs",
"Electric Vehicle Manufacturers",
"Two-Wheeler OEMs",
"Three-Wheeler Manufacturers",
"Industrial Equipment",
"Agricultural Machinery"
].map((i)=>(
    
<div
key={i}
className="bg-white px-8 py-5 rounded-xl shadow"
>
{i}
</div>

))}

</div>

</div>

</section>



{/* CTA */}

<section className="bg-red-700 text-white py-20 text-center">

<h2 className="text-4xl font-semibold mb-4">
Find the Right Casting Solution
</h2>

<p className="mb-8">
Our engineering team can help you select the optimal casting process
for your application
</p>

<button className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold">
Discuss Your Requirements →
</button>

</section>

</div>

)

}