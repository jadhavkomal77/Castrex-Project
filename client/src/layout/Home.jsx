
import CastingCapabilities from "../components/CastingCapabilities";
import Hero from "../components/Hero";
import About from "../pages/About";

const Home = () => {
  return (
    <div className="w-full">

      {/* FULL WIDTH */}
      <section id="home" className="w-full">
        <Hero />
      </section>

      {/* CENTER CONTENT */}
      <section id="about" className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <About />
        </div>
      </section>

      <section id="capabilities" className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <CastingCapabilities />
        </div>
      </section>

    </div>
  );
};

export default Home;