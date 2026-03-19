import { useGetPublicAboutQuery } from "../redux/apis/aboutApi";
import { useNavigate } from "react-router-dom";

export default function About() {

  const { data: about, isLoading } = useGetPublicAboutQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </section>
    );
  }

  if (!about) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500 text-lg">No About Data</p>
      </section>
    );
  }

  return (

<section className="bg-gray-50 py-16 md:py-20">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">


{/* IMAGE (mobile first) */}

<div className="order-1 lg:order-2 flex justify-center">

<img
src={about.image}
alt="about"
className="rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
/>

</div>



{/* CONTENT */}

<div className="order-2 lg:order-1 text-center lg:text-left">

<span className="text-orange-500 font-semibold uppercase text-xs sm:text-sm tracking-wide">
{about.headingSmall}
</span>


<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
{about.title}
</h2>


<p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
{about.description1?.slice(0,180)}...
</p>



{/* STATS */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

{about.stats?.map((stat,i)=>(

<div
key={i}
className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
>

<h3 className="text-3xl md:text-4xl font-bold text-red-700">
{stat.number}
</h3>

<p className="text-gray-600 text-sm mt-2">
{stat.label}
</p>

</div>

))}

</div>



{/* BUTTON */}

<div className="flex justify-center lg:justify-start">

<button
onClick={()=>navigate("/about-details")}
className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg shadow-md transition"
>
Learn More
</button>

</div>


</div>

</div>

</div>

</section>

  );
}