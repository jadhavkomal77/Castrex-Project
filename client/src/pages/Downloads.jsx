
import React from "react";
import { FaFileAlt, FaBookOpen, FaFolder, FaDownload } from "react-icons/fa";

const companyDocs = [
  {
    icon: <FaFileAlt />,
    title: "Company Profile Brochure",
    desc: "Comprehensive overview of Castrex manufacturing capabilities, facilities, and quality systems",
    size: "2.4 MB"
  },
  {
    icon: <FaBookOpen />,
    title: "Manufacturing Capability Presentation",
    desc: "Detailed presentation covering die casting processes, machining capabilities, and value-added services",
    size: "5.1 MB"
  },
  {
    icon: <FaFolder />,
    title: "Product Catalog",
    desc: "Complete catalog showcasing HPDC, LPDC, and GDC component categories with specifications",
    size: "8.3 MB"
  }
];

const technicalDocs = [
  {
    title: "Aluminium Alloy Material Datasheets",
    desc: "Technical specifications for common aluminium alloys used in die casting applications",
    size: "1.2 MB"
  },
  {
    title: "Engineering Design Guidelines",
    desc: "DFM guidelines for aluminium die casting components",
    size: "3.5 MB"
  },
  {
    title: "Manufacturing Capability Sheet",
    desc: "Machine tonnages, tolerances, and production capacities",
    size: "890 KB"
  },
  {
    title: "Surface Treatment Options Guide",
    desc: "Powder coating, anodizing, plating, and finishing services",
    size: "2.1 MB"
  }
];

const qualityDocs = [
  {
    title: "ISO 9001:2015 Certificate",
    desc: "Quality management system certification",
    size: "456 KB"
  },
  {
    title: "IATF 16949:2016 Certificate",
    desc: "Automotive quality certification",
    size: "512 KB"
  },
  {
    title: "Quality Policy Document",
    desc: "Commitment to continuous improvement",
    size: "320 KB"
  }
];

const Card = ({ icon, title, desc, size }) => (
  <div className="bg-[#F9FAFB] p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-[#B91C1C] text-2xl md:text-3xl">{icon}</div>
        <div className="flex gap-2 text-xs">
          <span className="bg-gray-200 px-3 py-1 rounded-full">PDF</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">{size}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>

    <button className="mt-6 bg-[#B91C1C] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-800 transition">
      <FaDownload /> Download
    </button>
  </div>
);

const Downloads = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/175045/pexels-photo-175045.jpeg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative px-6 text-white max-w-3xl">
          <p className="text-yellow-400 tracking-widest mb-3 text-sm font-semibold">
            RESOURCES & DOCUMENTATION
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Downloads
          </h1>

          <p className="text-sm md:text-lg text-gray-200">
            Access brochures, technical documents, and certifications.
          </p>
        </div>
      </section>

      {/* COMPANY DOCS */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-[#C9A14A] mr-2">▪</span>
          COMPANY DOCUMENTS
        </h2>

        <p className="text-gray-500 mb-12">
          Learn more about Castrex capabilities
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {companyDocs.map((doc, i) => (
            <Card key={i} {...doc} />
          ))}
        </div>
      </section>

      {/* TECHNICAL */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-[#C9A14A] mr-2">▪</span>
            TECHNICAL DOCUMENTS
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 mt-10">
            {technicalDocs.map((doc, i) => (
              <Card key={i} icon="📄" {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-[#C9A14A] mr-2">▪</span>
            QUALITY CERTIFICATIONS
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {qualityDocs.map((doc, i) => (
              <Card key={i} icon="🛡️" {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* NEED CUSTOM */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="text-[#C9A14A] mr-2">▪</span>
            NEED CUSTOM DOCUMENTATION?
          </h2>

          <p className="text-gray-500 mb-10">
            We provide project-specific documents and reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl border hover:bg-gray-100">
              Request Custom Documents
            </button>
            <button className="px-6 py-3 rounded-xl border hover:bg-gray-100">
              View All Certifications
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#9E1C1F] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Start Your Project With Castrex
          </h2>

          <p className="text-gray-100">
            Contact our engineering team for support.
          </p>
        </div>
      </section>
    </>
  );
};

export default Downloads;













