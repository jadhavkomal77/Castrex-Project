
import { Link } from "react-router-dom";
import { useGetPublicCareerQuery } from "../redux/apis/careerApi";
import { FaUserFriends } from "react-icons/fa";

export default function Careers() {

  const { data, isLoading } = useGetPublicCareerQuery();

  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center text-lg font-medium">
        Loading...
      </div>
    );
  }

  const career = data?.career;

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[400px] sm:h-[480px] md:h-[560px] flex items-center justify-center overflow-hidden">

        {/* ✅ HD IMAGE FIX */}
        <img
          src={
            career?.hero?.image?.includes("upload")
              ? career.hero.image.replace(
                  "/upload/",
                  "/upload/f_auto,q_auto,w_1920/"
                )
              : career?.hero?.image
          }
          alt="Career Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ✅ CONTENT */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl">

          {/* 🔥 ICON + TEXT */}
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-3">
            <FaUserFriends className="text-sm sm:text-base" />
            <p className="text-xs sm:text-lg font-semibold tracking-widest">
              JOIN OUR TEAM
            </p>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            {career?.hero?.title}
          </h1>

          {/* SUBTITLE */}
          <p className="text-sm sm:text-base md:text-lg text-white">
            {career?.hero?.subtitle}
          </p>

        </div>

      </section>


      {/* ================= WHY JOIN ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14">
          <span className="text-[#C9A14A] mr-2">▪</span> WHY JOIN CASTREX?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

          {career?.whyJoin?.map((item) => (
            <div
              key={item._id}
              className="bg-[#F3F4F6] p-6 sm:p-8 rounded-2xl text-center 
              shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="text-[#B91C1C] text-2xl sm:text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= JOBS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14">
          <span className="text-[#C9A14A] mr-2">▪</span> CURRENT OPENINGS
        </h2>

        <div className="space-y-6">

          {career?.jobs?.map((job) => (
            <div
              key={job._id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
              bg-slate-100 rounded-2xl px-5 sm:px-8 py-5 
              shadow-md hover:shadow-xl transition duration-300"
            >

              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                  {job.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {job.department} <span className="mx-2">•</span> {job.location}
                </p>
              </div>

              <button className="mt-4 sm:mt-0 bg-[#B91C1C] hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold transition">
                Apply Now
              </button>

            </div>
          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="bg-red-800 text-white py-14 md:py-20 text-center px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Don’t See a Position for You?
        </h2>

        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Send us your resume and we’ll keep you in mind for future opportunities
        </p>

        <Link
          to="/contact"
          className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact HR
        </Link>

      </section>

    </div>
  );
}