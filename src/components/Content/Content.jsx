/* eslint-disable react/prop-types */
import "./Content.css";
import ChartsView from "../ChartsView/ChartsView.jsx";
import RightSide from "../RightSide/RightSide.jsx";
import NavbarLogin from "../Navbar/NavbarLogin.jsx";
import NavbarMain from "../Navbar/NavbarMain.jsx";

export default function Content({ isLightMode }) {
  return (
    <div className="content">
      <div className="content_middle">
        <NavbarMain />
        <ChartsView isLightMode={isLightMode} />
      </div>
      <div className="content_Rsides">
        <NavbarLogin />
        <RightSide />
      </div>
    </div>
  );
}
