// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TreatmentPage from "./pages/TreatmentPage";

import AboutPage from "./pages/AboutPage";

import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <IconButton
          onClick={() => setDark(!dark)}
          sx={{ position: "fixed", top: 80, right: 20 }}
        >
          <DarkModeIcon />
        </IconButton>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
                    <Route path="/Treatment" element={<TreatmentPage />} />

                    <Route path="/AboutPage" element={<AboutPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
