
import { Link } from "react-router-dom";
import { Cpu, Droplet, Box } from "lucide-react";
import { useGetPublicCapabilitiesQuery } from "../redux/apis/castingCapabilityApi";

export default function CastingCapabilities() {
  const { data = [], isLoading } = useGetPublicCapabilitiesQuery();

  if (isLoading) {
    return (
      <div className="py-32 text-center text-lg">
        Loading...
      </div>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">

          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#d4a34a]"></div>

          <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
            CASTING CAPABILITIES
          </h2>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {[...data]
            .sort((a, b) => a.order - b.order)
            .map((item) => (

              <div
                key={item._id}
                className="bg-white p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
              >

                {/* ICON */}
                <div className="mb-4 md:mb-6 text-[#a21d2a]">

                  {item.icon === "chip" && <Cpu size={36} />}
                  {item.icon === "droplet" && <Droplet size={36} />}
                  {item.icon === "cube" && <Box size={36} />}

                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 md:mb-6 flex-grow">
                  {item.description}
                </p>

                {/* LINK */}
                <Link
                  to={`/capabilities/${item.slug}`}
                  className="text-[#a21d2a] font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base"
                >
                  Learn More →
                </Link>

              </div>

            ))}

        </div>

      </div>

    </section>
  );
}