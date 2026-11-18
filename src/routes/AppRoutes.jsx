
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home/Home";
import Templates from "../pages/Templates/Templates";
import About from "../pages/About/About";

// const About = () => (
//   <div className="p-20 text-center">About page coming soon.</div>
// );

const Contact = () => (
  <div className="p-20 text-center">Contact page coming soon.</div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
