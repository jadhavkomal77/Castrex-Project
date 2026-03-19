
import { useGetPublicHeroQuery } from "../redux/apis/heroApi";
import { Link } from "react-router-dom";

export default function Hero() {
  const { data, isLoading } = useGetPublicHeroQuery();

  if (isLoading) return null;

  const hero = data?.hero;

  return (
    <section
      className="w-full min-h-[75vh] md:min-h-[85vh] bg-cover bg-center flex items-center pt-[120px] md:pt-24"
      style={{
        backgroundImage: `url(${hero?.image})`,
      }}
    >
      {/* OVERLAY */}
      <div className=" w-full h-full flex items-center">

        {/* ❌ REMOVE max-w FROM HERE */}
        <div className="w-full px-4 sm:px-6 md:px-10 text-white">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {hero?.title}
          </h1>

          {/* SUBTITLE */}
          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl text-gray-200">
            {hero?.subtitle}
          </p>

          {/* BUTTON */}
          <Link
            to={hero?.buttonLink}
            className="inline-block bg-[#9E1C1F] px-5 py-2 md:px-6 md:py-3 rounded-md"
          >
            {hero?.buttonText}
          </Link>

        </div>

      </div>
    </section>
  );
}