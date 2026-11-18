import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="relative min-w-0 flex-1">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
};

export default MainLayout;