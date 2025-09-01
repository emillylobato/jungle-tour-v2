import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* crie outras páginas depois: /passeios, /sobre, /contato */}
      </Routes>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}