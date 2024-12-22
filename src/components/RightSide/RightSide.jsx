import "./RightSide.css";
import { useState } from "react";
import Technical_Indicator from "../Technical_Indicator/Technical_Indicator";

export default function RightSide() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="right_side">
      <div className="tabs">
        <span
          title="Symbol"
          className={toggleState === 1 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(1)}
        >
          Symbol
        </span>
        <span
          title="Technical Indicator"
          className={toggleState === 2 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(2)}
        >
          TI
        </span>
        <span
          title="Calendar"
          className={toggleState === 3 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(3)}
        >
          Calendar
        </span>
        <span
          title="Autochartist"
          className={toggleState === 4 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(4)}
        >
          Autochartist
        </span>
        <span
          title="News"
          className={toggleState === 5 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(5)}
        >
          News
        </span>
      </div>
      <div className="right_side_content"></div>
      {toggleState === 2 ? <Technical_Indicator /> : <></>}
      {/* display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); */}
    </div>
  );
}
