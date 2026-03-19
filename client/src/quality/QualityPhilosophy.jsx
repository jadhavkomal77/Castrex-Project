import React from "react";
import {
  FaBullseye,
  FaBolt,
  FaAward,
  FaUsers,
  FaCheckCircle,
  FaFileAlt,
  FaChartLine,
  FaShieldAlt
} from "react-icons/fa";

export default function QualityPhilosophy() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="relative h-[520px]">
        <img
          src="https://media.istockphoto.com/id/933399496/photo/overhead-view-of-a-female-blogger-writing-on-the-laptop.jpg?s=612x612&w=0&k=20&c=9bDug2lNtorCQMSv7cif2inwQYkcgj-_PiyhlXGbUn4="
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="text-sm tracking-widest text-[#F59E0B] mb-4">
              ▪ QUALITY ASSURANCE
            </p>

            <h1 className="text-6xl font-bold mb-6">
              Quality at Castrex
            </h1>

            <p className="text-xl max-w-2xl mb-4 text-gray-200">
              Delivering precision aluminium components through rigorous quality systems and continuous process control.
            </p>

            <p className="text-gray-300 max-w-3xl">
              At Castrex, quality is embedded into every stage of manufacturing. From raw material inspection to final product validation, our processes are designed to ensure consistent quality, reliability, and performance for every component we produce.
            </p>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#F3F4F6] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {[
            { value: "<0.5%", label: "Defect Rate" },
            { value: "100%", label: "Inspection Coverage" },
            { value: "1.67 Cpk", label: "Process Capability" },
            { value: "99.8%", label: "On-Time Delivery" },
          ].map((item, i) => (
            <div key={i} className="bg-[#F9FAFB] border rounded-2xl p-10 text-center">
              <h2 className="text-5xl font-bold text-[#A61D24]">{item.value}</h2>
              <p className="text-gray-500 mt-4 text-lg">{item.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* OUR QUALITY COMMITMENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#F59E0B]">▪</span> OUR QUALITY COMMITMENT
          </h2>

          <p className="text-gray-500 mb-12 text-lg">
            Manufacturing excellence through systematic quality management and continuous improvement
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#F5F5F5] p-10 rounded-2xl">
              <FaBullseye className="text-[#A61D24] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Zero Defect Manufacturing</h3>
              <p className="text-gray-600">
                Continuous process improvement and defect prevention through systematic root cause analysis and corrective action implementation.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10 rounded-2xl">
              <FaBolt className="text-[#A61D24] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Strict Process Monitoring</h3>
              <p className="text-gray-600">
                Real-time SPC monitoring at critical control points with automated alerts for out-of-specification conditions.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10 rounded-2xl">
              <FaAward className="text-[#A61D24] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">International Standards Compliance</h3>
              <p className="text-gray-600">
                Full compliance with ISO 9001, IATF 16949, and customer-specific quality requirements for automotive OEMs.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10 rounded-2xl">
              <FaUsers className="text-[#A61D24] text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer-Specific Requirements</h3>
              <p className="text-gray-600">
                Customized quality plans, inspection protocols, and documentation tailored to individual customer specifications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUALITY MANAGEMENT SYSTEM */}
      <section className="bg-[#F3F4F6] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#F59E0B]">▪</span> QUALITY MANAGEMENT SYSTEM
          </h2>

          <p className="text-gray-500 mb-12 text-lg">
            Structured quality framework ensuring consistent manufacturing excellence through proven methodologies
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* APQP */}
            <div className="bg-[#F9FAFB] p-10 rounded-2xl border">
              <div className="flex gap-4 mb-4">
                <div className="bg-[#A61D24] p-4 rounded-xl">
                  <FaFileAlt className="text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  APQP (Advanced Product Quality Planning)
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Comprehensive planning and validation of manufacturing processes before production launch.
              </p>

              <div className="h-[2px] bg-[#D4A017] mb-6"></div>

              <h4 className="font-semibold mb-3">Key Components</h4>

              <ul className="space-y-3">
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Cross-functional team approach</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Design FMEA and Process FMEA</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Control Plan development</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Pre-launch and production validation</li>
              </ul>
            </div>

            {/* PPAP */}
            <div className="bg-[#F9FAFB] p-10 rounded-2xl border">
              <div className="flex gap-4 mb-4">
                <div className="bg-[#A61D24] p-4 rounded-xl">
                  <FaCheckCircle className="text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  PPAP (Production Part Approval Process)
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Verification that production processes consistently produce parts meeting engineering specifications.
              </p>

              <div className="h-[2px] bg-[#D4A017] mb-6"></div>

              <h4 className="font-semibold mb-3">Key Components</h4>

              <ul className="space-y-3">
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Design record documentation</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Engineering change documentation</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Material certification</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Dimensional inspection results</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Initial process studies (Ppk/Cpk)</li>
              </ul>
            </div>

            {/* FMEA */}
            <div className="bg-[#F9FAFB] p-10 rounded-2xl border">
              <div className="flex gap-4 mb-4">
                <div className="bg-[#A61D24] p-4 rounded-xl">
                  <FaShieldAlt className="text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  FMEA (Failure Mode and Effects Analysis)
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Systematic identification and prevention of potential manufacturing risks before they occur.
              </p>

              <div className="h-[2px] bg-[#D4A017] mb-6"></div>

              <h4 className="font-semibold mb-3">Key Components</h4>

              <ul className="space-y-3">
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Design FMEA for product risk analysis</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Process FMEA for manufacturing risk</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Risk Priority Number (RPN) calculation</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Preventive action implementation</li>
              </ul>
            </div>

            {/* SPC */}
            <div className="bg-[#F9FAFB] p-10 rounded-2xl border">
              <div className="flex gap-4 mb-4">
                <div className="bg-[#A61D24] p-4 rounded-xl">
                  <FaChartLine className="text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  SPC (Statistical Process Control)
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Real-time monitoring of process performance and stability using statistical methods.
              </p>

              <div className="h-[2px] bg-[#D4A017] mb-6"></div>

              <h4 className="font-semibold mb-3">Key Components</h4>

              <ul className="space-y-3">
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Control charts for critical parameters</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Process capability studies (Cp/Cpk)</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Trend analysis and prediction</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#A61D24]" /> Automated alerts and corrective actions</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* QUALITY CULTURE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#F59E0B]">▪</span> QUALITY CULTURE
            </h2>

            <p className="text-gray-600 mb-6">
              Quality at Castrex extends beyond processes and systems to encompass a company-wide culture of excellence. Every team member shares responsibility for quality outcomes.
            </p>

            <p className="text-gray-600 mb-6">
              Our continuous improvement initiatives, regular training programs, and employee involvement create an environment where quality is everyone's priority.
            </p>

            <ul className="space-y-4">
              {[
                "Regular quality training and certification",
                "Employee involvement in problem-solving",
                "Cross-functional quality improvement teams",
                "Recognition programs for quality achievements",
                "Transparent quality metrics and performance tracking"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 bg-[#F3F4F6] p-4 rounded-xl">
                  <FaCheckCircle className="text-[#A61D24]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1748003047892-04bb794257c6"
            className="rounded-2xl w-full h-[420px] object-cover"
          />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A61D24] text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Quality You Can Trust
        </h2>

        <p className="mb-8 text-lg">
          Contact our engineering team to discuss your project requirements and quality standards.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-white text-[#A61D24] px-8 py-3 rounded-lg font-semibold">
            Request Quote
          </button>
          <button className="border border-white px-8 py-3 rounded-lg">
            Contact Engineering Team
          </button>
        </div>
      </section>

    </div>
  );
}