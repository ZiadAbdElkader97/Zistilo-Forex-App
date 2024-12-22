import "./Content.css";
import ChartsView from "../ChartsView/ChartsView.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import RightSide from "../RightSide/RightSide.jsx";

export default function Content() {
  return (
    <div className="content">
      <Navbar />
      <div className="content_sides">
        <ChartsView />
        <RightSide />
      </div>
    </div>
  );
}
