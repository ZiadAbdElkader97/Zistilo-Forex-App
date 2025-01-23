import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";
import UserProvider from "./context/UserProvider.jsx";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem("mode") === "light" || false
  );

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    localStorage.setItem("mode", !isLightMode ? "light" : "dark");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth > 480 ||
      (window.innerWidth >= 1024 && window.innerWidth <= 1199)
  );
  const [isRightSideOpen, setIsRightSideOpen] = useState(
    window.innerWidth > 480 ||
      (window.innerWidth >= 1024 && window.innerWidth <= 1199)
  );

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      const isTablet = window.innerWidth >= 1024 && window.innerWidth <= 1199;
      const isMobile = window.innerWidth <= 480;
      setIsSidebarOpen(
        isDesktop || window.innerWidth <= 768 || isTablet || !isMobile
      );
      setIsRightSideOpen(isDesktop || isTablet || !isMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    const isTablet = window.innerWidth >= 1024 && window.innerWidth <= 1199;
    if (window.innerWidth <= 480 || isTablet) {
      setIsSidebarOpen(!isSidebarOpen);
      setIsRightSideOpen(isSidebarOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const toggleRightSide = () => {
    const isTablet = window.innerWidth >= 1024 && window.innerWidth <= 1199;
    if (window.innerWidth <= 480 || isTablet) {
      setIsRightSideOpen(!isRightSideOpen);
      setIsSidebarOpen(isRightSideOpen);
    } else {
      setIsRightSideOpen(!isRightSideOpen);
    }
  };

  return (
    <UserProvider>
      <div className={`app ${isLightMode ? "light_mode" : "dark_mode"}`}>
        <Sidebar
          toggleMode={toggleMode}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Content
          isLightMode={isLightMode}
          isRightSideOpen={isRightSideOpen}
          toggleRightSide={toggleRightSide}
        />
      </div>
    </UserProvider>
  );
}
