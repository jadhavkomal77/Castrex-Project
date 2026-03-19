import {
  FaBullseye,
  FaChartLine,
  FaCheckCircle,
  FaChartBar
} from "react-icons/fa";

export default function QualityProcess() {
  return (
    <div className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[400px] md:h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="text-xs md:text-sm tracking-widest text-[#F59E0B] mb-3">
              ▪ QUALITY ASSURANCE
            </p>

            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Inspection & Quality Control
            </h1>

            <p className="text-sm md:text-lg max-w-2xl text-gray-200">
              Multi-stage inspection processes ensuring consistent component quality from raw material verification through final product validation.
            </p>

          </div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="py-16 md:py-24 bg-[#F3F4F6] text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Quality Performance Metrics
        </h2>

        <p className="text-gray-500 mb-12 text-sm md:text-lg">
          Measurable quality performance demonstrating manufacturing excellence
        </p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { icon: <FaBullseye />, value: ">98%", color: "#A61D24", title: "First Pass Yield", desc: "Components passing inspection on first submission without rework" },
            { icon: <FaChartLine />, value: "<500 PPM", color: "#D4A017", title: "Defect Rate", desc: "Parts per million defect rate across all production" },
            { icon: <FaCheckCircle />, value: "100%", color: "#A61D24", title: "Inspection Coverage", desc: "Every component inspected before shipment" },
            { icon: <FaChartBar />, value: "1.67 Cpk", color: "#D4A017", title: "Process Capability", desc: "Statistical process capability for critical dimensions" }
          ].map((item, i) => (

            <div key={i} className="bg-white rounded-2xl p-6 md:p-10 shadow">

              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-full bg-[#A61D24] flex items-center justify-center text-white text-xl md:text-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl md:text-4xl font-bold mb-2" style={{ color: item.color }}>
                {item.value}
              </h3>

              <p className="font-semibold mb-2">{item.title}</p>

              <p className="text-gray-500 text-sm">{item.desc}</p>

            </div>

          ))}

        </div>
      </section>

      {/* ================= THREE STAGE ================= */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            THREE-STAGE INSPECTION PROCESS
          </h2>

          <p className="text-gray-500 mb-16 max-w-3xl">
            Comprehensive quality control at every manufacturing stage ensures zero-defect delivery and complete customer confidence
          </p>

          {/* STEP 1 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">

            <div className="flex flex-col md:flex-row gap-6">

              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-[#b31217] to-[#6b0f1a] text-white text-2xl md:text-4xl font-bold">
                01
              </div>

              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-2">Incoming Inspection</h3>

                <p className="text-[#A61D24] italic mb-3">
                  Quality starts with verified materials
                </p>

                <p className="text-gray-600 mb-6">
                  Comprehensive verification of all incoming raw materials and purchased components before entering production.
                </p>

                <div className="space-y-3">
                  {["Material Certification Validation","Visual Inspection","Dimensional Verification"].map((t,i)=>(
                    <div key={i} className="bg-[#F9FAFB] p-4 rounded-xl shadow-sm">✔ {t}</div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    "100% of incoming materials\nInspection Rate",
                    "<2% at receiving\nReject Rate",
                    "24-48 hours\nTurnaround Time"
                  ].map((t,i)=>(
                    <div key={i} className="border-2 border-[#D4A017] rounded-xl p-4 text-center whitespace-pre-line">
                      <p className="font-bold text-[#A61D24]">{t.split("\n")[0]}</p>
                      <p className="text-gray-500 text-sm">{t.split("\n")[1]}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
              className="rounded-2xl w-full h-[250px] md:h-auto object-cover"
            />

          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">

            <img src="https://images.unsplash.com/photo-1581091215367-59ab6b70e5d1"
              className="rounded-2xl w-full h-[250px] md:h-auto object-cover"
            />

            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-3">
                In-Process Inspection
              </h3>

              <p className="text-[#A61D24] italic mb-3">
                Real-time quality control during manufacturing
              </p>

              <p className="text-gray-600 mb-6">
                Continuous monitoring and verification ensures process stability.
              </p>

              <div className="space-y-3">
                {["First Article Inspection (FAI)","Visual Inspection for Surface Defects","SPC Data Collection"].map((t,i)=>(
                  <div key={i} className="bg-[#F9FAFB] p-4 rounded-xl">✔ {t}</div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  "Every 50-100 parts\nSampling Frequency",
                  "X-bar and R charts\nControl Charts",
                  "<15 minutes for alerts\nReaction Time"
                ].map((t,i)=>(
                  <div key={i} className="border-2 border-[#D4A017] rounded-xl p-4 text-center whitespace-pre-line">
                    <p className="font-bold text-[#A61D24]">{t.split("\n")[0]}</p>
                    <p className="text-gray-500 text-sm">{t.split("\n")[1]}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-3">
                Final Inspection
              </h3>

              <p className="text-[#A61D24] italic mb-3">
                Comprehensive validation before delivery
              </p>

              <p className="text-gray-600 mb-6">
                Final verification ensures every component meets specifications.
              </p>

              <div className="space-y-3">
                {[
                  "CMM Dimensional Inspection",
                  "Visual Inspection Standards",
                  "Functional Testing",
                  "Leak Testing Validation",
                  "Surface Finish Verification",
                  "Documentation & Traceability"
                ].map((t,i)=>(
                  <div key={i} className="bg-[#F9FAFB] p-4 rounded-xl">✔ {t}</div>
                ))}
              </div>

            </div>

            <img src="https://images.unsplash.com/photo-1581093588401-22fbc66b0c7c"
              className="rounded-2xl w-full h-[250px] md:h-auto object-cover"
            />

          </div>

        </div>
      </section>

    </div>
  );
}   