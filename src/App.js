import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ProductsSection from "./components/Productsection";
import Footer from "./components/Footer";
import AppRoutes from "./pages/routes/AppRoutes";
import FeaturesSection from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection/>
      <AboutSection />
      <ProductsSection />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
