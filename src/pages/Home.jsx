import Footer from "../components/Footer";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
