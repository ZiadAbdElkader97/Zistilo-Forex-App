import "./RightSide.css";
import { useState } from "react";
import Tech_Section from "../Technical_Indicator/Tech_Section.jsx";
import RSide_Symbol from "../RSide_Symbol/RSide_Symbol.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import Patterns from "../Patterns/Patterns.jsx";
import News from "../News/News.jsx";

export default function RightSide() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="right_side">
      <div className="tabs">
        <span
          title="Technical Indicator"
          className={toggleState === 1 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(1)}
        >
          Tech
        </span>
        <span
          title="Symbol"
          className={toggleState === 2 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Symbol
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
          Patterns
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
      {toggleState === 1 ? <Tech_Section /> : <></>}
      {toggleState === 2 ? <RSide_Symbol /> : <></>}
      {toggleState === 3 ? <Calendar /> : <></>}
      {toggleState === 4 ? <Patterns /> : <></>}
      {toggleState === 5 ? <News /> : <></>}
    </div>
  );
}
