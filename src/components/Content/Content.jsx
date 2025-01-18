/* eslint-disable react/prop-types */
import "./Content.css";
import ChartsView from "../ChartsView/ChartsView.jsx";
import RightSide from "../RightSide/RightSide.jsx";
import NavbarLogin from "../Navbar/NavbarLogin.jsx";
import NavbarMain from "../Navbar/NavbarMain.jsx";

export default function Content({
  isLightMode,
  isRightSideOpen,
  toggleRightSide,
}) {
  return (
    <div className="content">
      <div className="content_middle">
        <NavbarMain />
        <ChartsView isLightMode={isLightMode} />
      </div>
      <div className="content_Rsides">
        <NavbarLogin isRightSideOpen={isRightSideOpen} />
        <RightSide
          isRightSideOpen={isRightSideOpen}
          toggleRightSide={toggleRightSide}
        />
      </div>
    </div>
  );
}
