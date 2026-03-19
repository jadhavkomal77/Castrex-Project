import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-14
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* COMPANY */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Company</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>About Castrex</li>
            <li>Leadership</li>
            <li>Group Companies</li>
            <li>Sustainability</li>
            <li>News & Events</li>
            <li>Locations</li>
          </ul>
        </div>

        {/* CAPABILITIES */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Capabilities
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>High Pressure Die Casting</li>
            <li>Low Pressure Die Casting</li>
            <li>Sand Casting</li>
            <li>CNC Machining</li>
            <li>Engineering Support</li>
          </ul>
        </div>

        {/* CUSTOMERS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Customers
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>Our Customers</li>
            <li>OEM Customers</li>
            <li>Tier-1 Customers</li>
            <li>OEM Platforms Served</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Resources
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>Products</li>
            <li>Quality</li>
            <li>Certifications</li>
            <li>Sustainability</li>
            <li>Request Quote</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Contact</h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Castrex Technologies LLP  
            Industrial Area, Phase 2  
            Pune, Maharashtra 411019
          </p>

          <div className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} />
            +91 20 1234 5678
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            info@castrex.in
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="max-w-7xl mx-auto border-t border-gray-700"></div>

      {/* CERTIFICATIONS */}
      <div className="max-w-7xl mx-auto px-6 py-10
      flex flex-col lg:flex-row items-center justify-between gap-6">

        <div className="flex gap-6 flex-wrap justify-center">

          <div className="bg-white text-black px-8 py-6 rounded-xl text-center w-[150px]">
            <p className="font-semibold">ISO 9001</p>
          </div>

          <div className="bg-white text-black px-8 py-6 rounded-xl text-center w-[150px]">
            <p className="font-semibold">IATF 16949</p>
          </div>

          <div className="bg-white text-black px-8 py-6 rounded-xl text-center w-[150px]">
            <p className="font-semibold">ISO 14001</p>
          </div>

        </div>

        <p className="text-sm text-gray-400 text-center">
          © 2026 Castrex Technologies LLP. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
