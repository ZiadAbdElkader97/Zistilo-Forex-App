import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";
import UserProvider from "./context/UserProvider.jsx";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <UserProvider>
      <div className={`app ${isLightMode ? "light_mode" : "dark_mode"}`}>
        <Sidebar toggleMode={toggleMode} />
        <Content isLightMode={isLightMode} />
      </div>
    </UserProvider>
  );
}
