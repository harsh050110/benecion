import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ProductsSection from "./components/Productsection";
import Footer from "./components/Footer";
import AppRoutes from "./pages/routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
