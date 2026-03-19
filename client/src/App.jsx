
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from "./Auth/AdminLogin";
import AdminRegister from "./Auth/AdminRegister";
import AdminProtected from "./shere/AdminProtected";
import AdminHome from "./Auth/AdminHome";
import AdminProfile from "./Auth/AdminProfile";
import AdminDashboard from "./Auth/AdminDashboard";
import NotFound from "./layout/NotFound";

import ScrollToTop from "./layout/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./layout/ErrorBoundary";
import PublicLayout from "./layout/PublicLayout";
import Home from "./layout/Home";
import Hero from "./components/Hero";
import AdminMainNavbar from "./Admin/AdminMainNavbar";
import AdminTopNavbar from "./Admin/AdminTopNavbar";
import AdminHero from "./Admin/AdminHero";
import AdminCastingMethods from "./Admin/AdminCastingMethods";
import CastingMethods from "./pages/CastingMethods";
import AdminFooter from "./Admin/AdminFooter";
import AdminAbout from "./Admin/AdminAbout";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import CastingCapabilityAdmin from "./Admin/CastingCapabilityAdmin";
import ValueServiceAdmin from "./Admin/ValueServiceAdmin";
import EngineeringSupportAdmin from "./Admin/EngineeringSupportAdmin";
import CastingCapabilities from "./components/CastingCapabilities";
import CapabilityDetail from "./components/CapabilityDetails";
import Contact from "./pages/Contact";
import AdminContacts from "./Admin/AdminContacts";
import AdminRfq from "./Admin/AdminRfq";
import RfqPage from "./pages/RfqPage";
import Careers from "./pages/Careers";
import AdminCareers from "./Admin/AdminCareers";
import QualityPhilosophy from "./quality/QualityPhilosophy";
import QualityProcess from "./quality/QualityProcess";
import LaboratoryPage from "./quality/LaboratoryPage";
import Locations from "./pages/Locations";
import Downloads from "./pages/Downloads";


function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
     <ScrollToTop />  
     <ErrorBoundary>  

      <Routes>

       {/*  PUBLIC  */}
        <Route element={<PublicLayout />}>

              <Route index element={<Home />} />
              <Route path="home" element={<Hero />} />
            
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about-details" element={<AboutDetails />} />
              <Route path="/rfq" element={<RfqPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/downloads" element={<Downloads />} />
            
              <Route path="capabilities" element={<CastingCapabilities />} />
              <Route path="/capabilities/:slug" element={<CapabilityDetail/>}/>


              <Route path="/quality-philosophy" element={<QualityPhilosophy/>}/>
              <Route path="/inspection-processes" element={<QualityProcess />}/>
              <Route path="/quality-laboratory" element={<LaboratoryPage/>}/>
              {/* <Route path="/quality-certifications" element={<LaboratoryPage/>}/> */}
              {/* <Route path="capabilities" element={<CastingCapabilities />} />
              <Route path="capabilities" element={< />} /> */}

            
              <Route path="casting-methods" element={<CastingMethods />} />
              <Route path="*" element={<NotFound />} />

         </Route>


        {/*  ADMIN AUTH  */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />

        {/*  ADMIN PANEL  */}
        <Route
            path="/admin"
               element={<AdminProtected> <AdminDashboard /> </AdminProtected> }>
                
          <Route index element={<AdminHome />} />
          <Route path="profile" element={<AdminProfile />} />
        <Route path="mainNavbar" element={<AdminMainNavbar />} />
        <Route path="topNavbar" element={<AdminTopNavbar />} />
          <Route path="adminhero" element={<AdminHero />} />
          <Route path="adminabout" element={<AdminAbout />} />
          <Route path="adminrfq" element={<AdminRfq />} />
          <Route path="admincareers" element={<AdminCareers />} />

           <Route path="casting-capabilities" element={<CastingCapabilityAdmin/>}/>
           <Route path="value-services" element={<ValueServiceAdmin/>}/>
           <Route path="engineering-support" element={<EngineeringSupportAdmin/>}/>

           <Route path="casting-methods" element={<AdminCastingMethods/>}/>
           <Route path="admincontact" element={<AdminContacts/>}/>
           <Route path="adminfooter" element={<AdminFooter/>}/>

   
        
           <Route path="*" element={<NotFound />} />
           </Route>
        
               <Route path="*" element={<NotFound />} />
      </Routes>

      </ErrorBoundary> 

    </BrowserRouter>
  );
}

export default App;
