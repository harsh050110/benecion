import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./pages/routes/AppRoutes";
import ScrollToTop from "./pages/ScrollTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
