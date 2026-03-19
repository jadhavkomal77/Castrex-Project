
import { useState } from "react";
import { useCreateRfqMutation } from "../redux/apis/rfqApi";

export default function Rfq(){

const [createRfq] = useCreateRfqMutation()

const [form,setForm] = useState({
company:"",
name:"",
email:"",
phone:"",
componentType:"",
annualVolume:"",
projectDetails:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
e.preventDefault()

await createRfq(form)

alert("Request Submitted Successfully")

setForm({
company:"",
name:"",
email:"",
phone:"",
componentType:"",
annualVolume:"",
projectDetails:""
})
}

return(

<section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">

{/* LEFT SIDE */}

<div>

<p className="text-yellow-600 font-semibold mb-4">
REQUEST FOR QUOTE
</p>

<h1 className="text-5xl font-bold leading-tight mb-6">
Start Your Project With Castrex
</h1>

<p className="text-gray-600 mb-10">
Fill out the form and our team will get back to you within 24 hours
with a detailed quote and engineering recommendations.
</p>

{/* CONTACT INFO */}

<div className="space-y-6">

<div className="flex items-start gap-4">

<div className="text-red-600 text-xl">📞</div>

<div>
<p className="font-semibold">Phone</p>
<p className="text-gray-600">+91 20 1234 5678</p>
</div>

</div>

<div className="flex items-start gap-4">

<div className="text-red-600 text-xl">✉️</div>

<div>
<p className="font-semibold">Email</p>
<p className="text-gray-600">sales@castrex.in</p>
</div>

</div>

<div className="flex items-start gap-4">

<div className="text-red-600 text-xl">📍</div>

<div>
<p className="font-semibold">Address</p>
<p className="text-gray-600">
Castrex Technologies LLP <br/>
Industrial Area, Phase 2 <br/>
Pune, Maharashtra 411019
</p>
</div>

</div>

</div>

</div>


{/* RIGHT SIDE FORM */}

<div className="bg-gray-50 p-10 rounded-xl shadow-sm">

<form onSubmit={handleSubmit} className="space-y-6">

{/* Company */}

<div>

<label className="font-medium">
Company Name *
</label>

<input
name="company"
value={form.company}
onChange={handleChange}
placeholder="Your Company"
className="w-full border rounded-lg p-3 mt-2"
/>

</div>


{/* Name + Email */}

<div className="grid grid-cols-2 gap-4">

<div>

<label>Name *</label>

<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="John Doe"
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

<div>

<label>Email *</label>

<input
name="email"
value={form.email}
onChange={handleChange}
placeholder="john@company.com"
className="w-full border rounded-lg p-3 mt-2"
/>

</div>

</div>


{/* Phone */}

<div>

<label>Phone *</label>

<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="+91 98765 43210"
className="w-full border rounded-lg p-3 mt-2"
/>

</div>


{/* Component Type */}

<div>

<label>Component Type</label>

<select
name="componentType"
value={form.componentType}
onChange={handleChange}
className="w-full border rounded-lg p-3 mt-2"
>

<option>2W Components</option>
<option>3W Components</option>
<option>4W Components</option>
<option>EV Components</option>
<option>Industrial Components</option>

</select>

</div>


{/* Annual Volume */}

<div>

<label>Annual Volume</label>

<input
name="annualVolume"
value={form.annualVolume}
onChange={handleChange}
placeholder="e.g., 100,000 pieces/year"
className="w-full border rounded-lg p-3 mt-2"
/>

</div>


{/* Project Details */}

<div>

<label>Project Details *</label>

<textarea
name="projectDetails"
value={form.projectDetails}
onChange={handleChange}
rows="5"
placeholder="Please provide details about your component requirements..."
className="w-full border rounded-lg p-3 mt-2"
/>

</div>


{/* Submit Button */}

<button
className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-lg text-lg font-semibold"
>

Submit Request

</button>

</form>

</div>

</section>

)
}