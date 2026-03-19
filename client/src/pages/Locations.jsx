
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaIndustry
} from "react-icons/fa";

const Locations = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden">

        <img
          src="https://png.pngtree.com/background/20220720/original/pngtree-high-rise-building-hd-photography-material-picture-image_1683766.jpg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative px-6 text-white max-w-3xl">

          <p className="text-yellow-400 tracking-widest mb-3 text-sm md:text-base font-semibold">
            GLOBAL PRESENCE
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Locations
          </h1>

          <p className="text-sm md:text-lg text-gray-200">
            Manufacturing facilities strategically located to serve automotive OEMs across India
          </p>

        </div>
      </section>


      {/* ================= HEADQUARTERS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          <span className="text-[#C9A14A] mr-2">▪</span>
          MANUFACTURING HEADQUARTERS
        </h2>

        <p className="text-gray-500 mb-12 max-w-xl">
          Our state-of-the-art facility in Pune serves as our primary manufacturing hub
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <h3 className="text-2xl md:text-3xl font-bold">
              Pune Manufacturing Plant
            </h3>

            {/* ITEM */}
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text: `Castrex Technologies LLP
Plot No. 45, Chakan Industrial Area Phase II
Village Kuruli, Khed, Pune - 410501
Maharashtra, India`
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                text: `+91 20 6654 3210
+91 20 6654 3211 (Sales)`
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: `sales@castrex.in
info@castrex.in`
              },
              {
                icon: <FaClock />,
                title: "Operating Hours",
                text: `Production: 24/7 Operations
Office: Mon–Sat, 9:00 AM – 6:00 PM IST`
              },
              {
                icon: <FaIndustry />,
                title: "Facility Size",
                text: `75,000 sq. ft. Manufacturing Space
Land Area: 3 acres`
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">

                <div className="bg-[#B91C1C] text-white p-3 rounded-lg text-lg">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-sm whitespace-pre-line">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

            {/* ADVANTAGES */}
            <div className="bg-[#F3F4F6] p-6 rounded-2xl">
              <h4 className="font-semibold mb-3 text-lg">
                Strategic Advantages
              </h4>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Located in Chakan Automotive Hub, proximity to major OEMs",
                  "40 km from Pune International Airport",
                  "Excellent connectivity to Mumbai-Pune Expressway",
                  "Access to skilled automotive workforce",
                  "Proximity to Tier-1 suppliers ecosystem"
                ].map((text, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#B91C1C]">•</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

          </div>


          {/* RIGHT */}
          <div className="space-y-6">

            <img
              src="https://images.indianexpress.com/2024/01/DRDO.jpg"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-2xl"
            />

            <div className="bg-[#F3F4F6] rounded-2xl h-[220px] flex flex-col items-center justify-center text-center">

              <FaMapMarkerAlt className="text-[#B91C1C] text-3xl mb-2" />

              <h4 className="font-semibold">
                Chakan Industrial Area, Pune
              </h4>

              <p className="text-gray-500 text-sm">
                Maharashtra, India
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CAPABILITIES ================= */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            <span className="text-[#C9A14A] mr-2">▪</span>
            MANUFACTURING CAPABILITIES
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              {
                title: "Die Casting",
                list: [
                  "24 HPDC machines (250T - 1200T)",
                  "2 LPDC machines",
                  "Robotic automation systems",
                  "In-line trimming cells"
                ]
              },
              {
                title: "Machining",
                list: [
                  "18 CNC machining centers",
                  "3, 4, and 5-axis capabilities",
                  "Automated part handling",
                  "In-process inspection"
                ]
              },
              {
                title: "Value Added Services",
                list: [
                  "Surface treatment facility",
                  "Leak testing stations",
                  "Assembly lines",
                  "Quality laboratory"
                ]
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">

                <h3 className="text-lg font-semibold text-[#B91C1C] mb-3">
                  {card.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {card.list.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= SALES OFFICES ================= */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-[#C9A14A] mr-2">▪</span>
            REGIONAL SALES OFFICES
          </h2>

          <p className="text-gray-500 mb-10">
            Supporting customers across India with regional presence
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              {
                city: "Delhi NCR",
                address: "Sector 18, Gurgaon\nHaryana - 122015",
                phone: "+91 124 4567 890",
                email: "delhi@castrex.in"
              },
              {
                city: "Bengaluru",
                address: "Whitefield Industrial Area\nBengaluru - 560066",
                phone: "+91 80 4123 5678",
                email: "bengaluru@castrex.in"
              },
              {
                city: "Chennai",
                address: "Oragadam Industrial Zone\nChennai - 602105",
                phone: "+91 44 4567 8901",
                email: "chennai@castrex.in"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">

                <h3 className="font-semibold text-lg mb-3">
                  {item.city}
                </h3>

                <p className="text-[#B91C1C] text-sm font-medium">Address</p>
                <p className="text-gray-600 text-sm whitespace-pre-line mb-2">
                  {item.address}
                </p>

                <p className="text-[#B91C1C] text-sm font-medium">Phone</p>
                <p className="text-gray-600 text-sm mb-2">
                  {item.phone}
                </p>

                <p className="text-[#B91C1C] text-sm font-medium">Email</p>
                <p className="text-gray-600 text-sm">
                  {item.email}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#9E1C1F] text-white py-16 md:py-20 text-center">

        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Visit Our Manufacturing Facility
          </h2>

          <p className="text-gray-200 mb-8 text-sm md:text-lg">
            We welcome OEM teams, procurement professionals, and engineering teams to visit our facility
          </p>

          <button className="bg-white text-[#9E1C1F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Request Factory Visit
          </button>

        </div>

      </section>

    </div>
  );
};

export default Locations;