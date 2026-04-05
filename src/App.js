import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./pages/routes/AppRoutes";
import ScrollToTop from "./pages/ScrollTop";
import WhatsAppButton from "./pages/Whatsapp";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <WhatsAppButton />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
