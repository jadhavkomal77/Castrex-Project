
import React from "react";

const sections = [
  {
    title: "CMM (Coordinate Measuring Machine)",
    desc: "Coordinate Measuring Machines (CMM) are used for high precision dimensional measurement ensuring tight tolerance and quality control.",
    img: "/images/cmm.png",
  },
  {
    title: "Optical Emission Spectrometer",
    desc: "Used for accurate analysis of metal composition ensuring material quality and compliance.",
    img: "/images/spectrometer.png",
  },
  {
    title: "X-Ray Inspection System",
    desc: "Advanced non-destructive testing used to detect internal defects and inconsistencies.",
    img: "/images/xray.png",
  },
  {
    title: "Leak Testing Equipment",
    desc: "Ensures product sealing integrity by detecting even the smallest leaks.",
    img: "/images/leak.png",
  },
  {
    title: "Additional Testing Equipment",
    desc: "Includes hardness testers, tensile machines and various environmental testing systems.",
    img: "/images/testing.png",
  },
];

export default function FinalLabClone() {
  return (
    <div className="bg-white text-[#0F172A]">

      {/* HERO */}
      <section className="max-w-[1200px] mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-[64px] leading-[72px] font-semibold tracking-tight">
            Quality Laboratory
          </h1>
          <p className="mt-6 text-[18px] text-gray-500 leading-[30px] max-w-md">
            Delivering accurate testing and inspection solutions using advanced metrology and modern technologies.
          </p>
        </div>

        <img
          src="/images/hero.png"
          className="w-full h-[420px] object-cover rounded-lg"
        />
      </section>

      {/* METROLOGY */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-[44px] font-semibold tracking-tight">
          Metrology & Testing Capabilities
        </h2>
        <p className="mt-5 text-[18px] text-gray-500 leading-[30px] max-w-2xl">
          Our laboratory is equipped with advanced instruments for accurate measurement, inspection and quality validation.
        </p>
      </section>

      {/* EQUIPMENT */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32 space-y-32">

        {sections.map((item, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-20 items-center">

            {i % 2 === 0 ? (
              <>
                <img
                  src={item.img}
                  className="w-full h-[380px] object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-[30px] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[18px] text-gray-500 leading-[30px] max-w-md">
                    {item.desc}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-[30px] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[18px] text-gray-500 leading-[30px] max-w-md">
                    {item.desc}
                  </p>
                </div>
                <img
                  src={item.img}
                  className="w-full h-[380px] object-cover rounded-lg"
                />
              </>
            )}

          </div>
        ))}

      </section>

    </div>
  );
}