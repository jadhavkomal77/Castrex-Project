import { useState } from "react";
import { useCreateContactMutation } from "../redux/apis/contactApi";
import { Link } from "react-router-dom";

export default function Contact() {

  const [createContact, { isLoading }] = useCreateContactMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createContact(form).unwrap();

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <>

{/* HERO SECTION */}

<section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">

  {/* Professional Background Image */}
  <img
    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
    alt="Engineering Manufacturing"
    className="absolute w-full h-full object-cover"
  />

  {/* Slight dark overlay for premium look */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative max-w-3xl px-6 text-white">

    <p className="text-yellow-400 tracking-widest mb-4 font-semibold">
      GET IN TOUCH
    </p>

    <h1 className="text-5xl font-bold mb-6">
      Contact Us
    </h1>

    <p className="text-lg leading-relaxed">
      Connect with our engineering and manufacturing team. Our team is ready to support your aluminium casting requirements and engineering projects.
    </p>

  </div>

</section>

{/* CONTACT SECTION */}

<section className="bg-gray-50 py-24">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

{/* LEFT SIDE */}

<div>

<h2 className="text-4xl font-bold mb-10">
Our Locations
</h2>


{/* HEAD OFFICE */}

<div className="bg-white p-8 rounded-2xl shadow mb-8">

<h3 className="text-xl font-semibold mb-4">
Head Office & Manufacturing
</h3>

<p className="text-gray-700 leading-relaxed mb-4">
Castrex Technologies LLP <br/>
Industrial Area, Phase 2 <br/>
Pune, Maharashtra 411019 <br/>
India
</p>

<p className="mb-2">📞 +91 20 1234 5678</p>

<p className="mb-2">✉ info@castrex.in</p>

<p>
🕒 Mon - Fri: 9:00 AM - 6:00 PM <br/>
Sat: 9:00 AM - 1:00 PM
</p>

</div>


{/* SALES */}

<div className="bg-white p-8 rounded-2xl shadow">

<h3 className="text-xl font-semibold mb-6">
Sales & Engineering
</h3>

<p className="mb-4">
📧 Sales Inquiries <br/>
<span className="text-gray-600">
sales@castrex.in
</span>
</p>

<p className="mb-4">
📧 Engineering Support <br/>
<span className="text-gray-600">
engineering@castrex.in
</span>
</p>

<p>
📧 HR & Careers <br/>
<span className="text-gray-600">
hr@castrex.in
</span>
</p>

</div>

</div>


{/* FORM */}

<div className="bg-white p-10 rounded-2xl shadow">

<h2 className="text-4xl font-bold mb-10">
Send Us a Message
</h2>

<form onSubmit={handleSubmit} className="space-y-6">

<div>

<label className="text-sm font-medium">
Name *
</label>

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Your Name"
required
className="w-full border rounded-lg px-4 py-3 mt-1"
/>

</div>

<div>

<label className="text-sm font-medium">
Email *
</label>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="your@email.com"
required
className="w-full border rounded-lg px-4 py-3 mt-1"
/>

</div>

<div>

<label className="text-sm font-medium">
Phone
</label>

<input
type="text"
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="+91 98765 43210"
className="w-full border rounded-lg px-4 py-3 mt-1"
/>

</div>

<div>

<label className="text-sm font-medium">
Subject *
</label>

<select
name="subject"
value={form.subject}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-3 mt-1"
>

<option value="">
Select Subject
</option>

<option>
Request for Quote
</option>

<option>
Technical Support
</option>

<option>
General Inquiry
</option>

<option>
Careers
</option>

</select>

</div>

<div>

<label className="text-sm font-medium">
Message *
</label>

<textarea
rows="5"
name="message"
value={form.message}
onChange={handleChange}
placeholder="How can we help you?"
required
className="w-full border rounded-lg px-4 py-3 mt-1"
/>

</div>

<button
type="submit"
disabled={isLoading}
className="w-full bg-[#B91C1C] text-white py-4 rounded-xl font-semibold hover:bg-red-700"
>

{isLoading ? "Sending..." : "Send Message"}

</button>

</form>

</div>

</div>

</section>


{/* RFQ SECTION */}

<section className="bg-gray-100 py-24 text-center">

<div className="max-w-3xl mx-auto px-6">

<h2 className="text-4xl font-bold text-gray-800 mb-6">
Need a Detailed Quote?
</h2>

<p className="text-gray-600 mb-10">
For component quotations, please use our RFQ form for faster processing
</p>

{/* <button className="bg-[#B91C1C] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-red-700"> */}

{/* </button> */}
 <Link
        to="/rfq"
        className="bg-[#9E1C1F] text-white px-5 py-2 rounded hover:bg-[#7c1417]"
      >
       Submit RFQ
      </Link>
</div>

</section>

</>
);
}