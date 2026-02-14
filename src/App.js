import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar"
import './index.css'
import AppRoutes from "./pages/routes/AppRoutes";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ProductsSection from "./components/Productsection";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <ProductsSection/>
    <Footer/>
    <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
