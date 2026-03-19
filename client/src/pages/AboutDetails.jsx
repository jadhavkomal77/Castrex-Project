import { useGetPublicAboutQuery } from "../redux/apis/aboutApi";

export default function AboutDetails() {

  const { data: about, isLoading } = useGetPublicAboutQuery();

  if (isLoading) return <div className="py-20 text-center">Loading...</div>;
  if (!about) return <div className="py-20 text-center">No About Data</div>;

  return (

    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* TITLE */}

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Company
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering precision manufacturing solutions with innovation,
            quality, and reliability for global industries.
          </p>

        </div>


        {/* IMAGE + CONTENT */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          <img
            src={about.image}
            alt="about"
            className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
          />

          <div>

            <h2 className="text-3xl font-bold mb-6">
              A Legacy of Engineering Excellence
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {about.description1}
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {about.description2}
            </p>

            <p className="text-gray-600 leading-relaxed">
              Castrex Technologies provides high-precision aluminium die casting
              solutions designed for automotive and industrial sectors.
              Our modern manufacturing facilities and experienced engineering
              team ensure consistent product quality and innovation.
            </p>

          </div>

        </div>


        {/* STATS */}

        <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mb-24">

          {about.stats?.map((stat, i) => (

            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow-md text-center"
            >

              <h3 className="text-4xl font-bold text-red-700">
                {stat.number}
              </h3>

              <p className="text-gray-600 mt-2">
                {stat.label}
              </p>

            </div>

          ))}

        </div>


        {/* CTA SECTION */}

        <section className="bg-gray-100 py-20 rounded-2xl">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Manufacturing Support?
            </h2>

            <p className="text-gray-600 mb-8">
              Contact our team to discuss your project requirements
              and discover how we can deliver high-quality manufacturing
              solutions for your business.
            </p>

            <button
              onClick={() => window.location.href="/contact"}
              className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-xl text-lg"
            >
              Contact Now
            </button>

          </div>

        </section>

      </div>

    </section>
  );
}