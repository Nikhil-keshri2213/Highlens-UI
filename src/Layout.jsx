import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer"
import LightRays from "./background/LightRays";

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/"; // no navbar/bg on home

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {!hideLayout && <NavBar />}

      <div className={!hideLayout ? "pt-28" : ""}>
        <Outlet />
      </div>

       {!hideLayout && <Footer />}
    </div>
  );
}

export default Layout;
