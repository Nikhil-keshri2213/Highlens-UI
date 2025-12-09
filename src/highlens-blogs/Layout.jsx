import { Outlet } from "react-router-dom";
import NavBar from "../highlens-blogs/components/layout/Navbar";
import Footer from "../highlens-blogs/components/layout/Footer";

function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      
      {/* Fixed Navbar */}
      <NavBar />

      {/* Main Content — with top padding so it is not hidden behind navbar */}
      <main className="flex-grow pt-20 px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;