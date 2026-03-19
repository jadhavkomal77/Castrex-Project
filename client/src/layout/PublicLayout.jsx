

// import { Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// // import WhatsappButton from "./WhatsappButton";
// import Footer from "../components/Footer";
// import PublicTopNavbar from "../components/PublicTopNavbar";
// import PublicMainNavbar from "../components/PublicMainNavbar";
// function ScrollToHash() {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (!hash) return;

//     let attempts = 0;

//     const scroll = () => {
//       const el = document.querySelector(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       } else if (attempts < 20) {
//         attempts++;
//         setTimeout(scroll, 100);
//       }
//     };

//     scroll();
//   }, [hash]);

//   return null;
// }


// export default function PublicLayout() {
//   return (
//     <>
//       <PublicTopNavbar />
//       <PublicMainNavbar />

//       <ScrollToHash />

//       <Outlet />

//       <Footer />
//       {/* <WhatsappButton /> */}
//     </>
//   );
// }



import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import PublicTopNavbar from "../components/PublicTopNavbar";
import PublicMainNavbar from "../components/PublicMainNavbar";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let attempts = 0;

    const scroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(scroll, 100);
      }
    };

    scroll();
  }, [hash]);

  return null;
}

export default function PublicLayout() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">

      <PublicTopNavbar />
      <PublicMainNavbar />

      <ScrollToHash />

      {/* 🔥 IMPORTANT WRAPPER */}
      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}