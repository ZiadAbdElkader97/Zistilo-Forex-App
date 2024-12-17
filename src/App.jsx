import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <>
      <div className={`app ${isLightMode ? "light_mode" : "dark_mode"}`}>
        <Sidebar toggleMode={toggleMode} />
        <Navbar />
      </div>
    </>
  );
}
