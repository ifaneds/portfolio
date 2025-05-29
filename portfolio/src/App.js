import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Import the main layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import your new page components
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Import your global CSS file
import "./style.css";

// A simple layout component for pages that share header/footer
function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="container main-content">
        <Outlet /> {/* This is where the routed component will be rendered */}
      </main>
      <Footer />
    </div>
  );
}
console.log("Current NODE_ENV:", process.env.NODE_ENV);

const basename = process.env.PUBLIC_URL || "/";
console.log("Basename:", basename); // Log the basename for debugging

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Define your routes here */}
          <Route index element={<Hero />} /> {/* Default route for "/" */}
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* Add a catch-all for 404 if desired */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
