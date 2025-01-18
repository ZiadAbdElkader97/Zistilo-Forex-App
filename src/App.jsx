import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";
import UserProvider from "./context/UserProvider.jsx";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth > 768 || window.innerWidth <= 768
  );
  const [isRightSideOpen, setIsRightSideOpen] = useState(
    window.innerWidth > 768
  );

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setIsSidebarOpen(isDesktop || window.innerWidth <= 768);
      setIsRightSideOpen(isDesktop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(!isSidebarOpen);
      setIsRightSideOpen(isSidebarOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const toggleRightSide = () => {
    if (window.innerWidth <= 768) {
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
