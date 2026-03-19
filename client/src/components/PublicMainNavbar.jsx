
import { useState, useEffect } from "react";
import { useGetPublicMainNavbarQuery } from "../redux/apis/mainNavbarApi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function PublicMainNavbar() {
  const { data, isLoading } = useGetPublicMainNavbarQuery();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // 🔥 body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  if (isLoading) return null;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-3">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/castrex-logo.png"
              alt="Castrex"
              className="h-12 md:h-16 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center">

            {data?.menu?.map((item) => {
              const hasDropdown = item.submenu?.length > 0;

              return (
                <div key={item._id} className="relative group">

                  <Link
                    to={item.link}
                    className="flex items-center gap-1 font-medium text-black hover:text-[#9E1C1F]"
                  >
                    {item.label}
                    {hasDropdown && (
                      <FaChevronDown className="text-xs" />
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  {hasDropdown && (
                    <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">

                      <div className="bg-white shadow-xl w-56 rounded-md border mt-2">

                        {item.submenu.map((sub) => (
                          <Link
                            key={sub._id}
                            to={sub.link}
                            className="block px-5 py-3 hover:bg-[#f5dcdf]"
                          >
                            {sub.label}
                          </Link>
                        ))}

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* CTA BUTTON */}
          <Link
            to="/rfq"
            className="hidden md:block bg-[#9E1C1F] text-white px-5 py-2 rounded hover:bg-[#7c1417]"
          >
            Request Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-white z-[999] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src="/castrex-logo.png" className="h-10" />

          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* MENU */}
        <div className="px-4 py-4 space-y-2 overflow-y-auto h-[calc(100%-70px)]">

          {data?.menu?.map((item) => {
            const hasDropdown = item.submenu?.length > 0;

            return (
              <div key={item._id} className="border-b">

                {/* MAIN ITEM */}
                <div
                  className="flex justify-between items-center py-4"
                  onClick={() =>
                    hasDropdown
                      ? setOpenDropdown(
                          openDropdown === item._id ? null : item._id
                        )
                      : setMenuOpen(false)
                  }
                >
                  <Link to={item.link} className="font-medium">
                    {item.label}
                  </Link>

                  {hasDropdown && (
                    <FaChevronDown
                      className={`transition ${
                        openDropdown === item._id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* SUBMENU */}
                {hasDropdown && openDropdown === item._id && (
                  <div className="pl-3 pb-3">

                    {item.submenu.map((sub) => (
                      <Link
                        key={sub._id}
                        to={sub.link}
                        className="block py-2 text-sm text-gray-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

          {/* CTA */}
          <Link
            to="/rfq"
            className="block mt-6 bg-[#9E1C1F] text-white text-center py-3 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Request Quote
          </Link>

        </div>

      </div>
    </>
  );
}