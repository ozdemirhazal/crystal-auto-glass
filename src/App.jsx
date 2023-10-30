import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import LogInSignUp from "./pages/LogInSignUpPage";
import CaravanProductsPage from "./pages/CaravanProductsPage";
import CarProductsPage from "./pages/CarProductsPage";
import YachtProductsPage from "./pages/YachtProductsPage";
import BigAutoProductsPage from "./pages/BigAutoProductsPages";
import CarGlassFilmProductsPage from "./pages/CarGlassFilmPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crystal-auto/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login-signup" element={<LogInSignUp />} />
          <Route
            path="/products/caravan-glass"
            element={<CaravanProductsPage />}
          />
          <Route path="/products/auto-glass" element={<CarProductsPage />} />
          <Route
            path="/products/big-auto-glass"
            element={<BigAutoProductsPage />}
          />
          <Route path="/products/yacht-glass" element={<YachtProductsPage />} />
          <Route
            path="/products/car-glass-film"
            element={<CarGlassFilmProductsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
