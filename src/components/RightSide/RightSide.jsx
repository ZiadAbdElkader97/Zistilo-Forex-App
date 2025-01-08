import "./RightSide.css";
import { useState } from "react";
import Tech_Section from "../Technical_Indicator/Tech_Section.jsx";
import RSide_Symbol from "../RSide_Symbol/RSide_Symbol.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import Patterns from "../Patterns/Patterns.jsx";
import MovingAverage from "../MovingAverage/MovingAverage.jsx";
import PivotPoints from "../PivotPoints/PivotPoints.jsx";

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
          title="Calendar"
          className={toggleState === 2 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Calendar
        </span>
        <span
          title="Technical Indicator"
          className={toggleState === 3 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(3)}
        >
          Tech
        </span>
        <span
          title="Patterns"
          className={toggleState === 4 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(4)}
        >
          Patterns
        </span>
        <span
          title="Moving Average"
          className={toggleState === 5 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(5)}
        >
          M.A
        </span>
        <span
          title="Pivot Points"
          className={toggleState === 6 ? "tab tab_active" : "tab"}
          onClick={() => toggleTab(6)}
        >
          P.P
        </span>
      </div>
      <div className="right_side_content"></div>
      {toggleState === 1 ? <RSide_Symbol /> : <></>}
      {toggleState === 2 ? <Calendar /> : <></>}
      {toggleState === 3 ? <Tech_Section /> : <></>}
      {toggleState === 4 ? <Patterns /> : <></>}
      {toggleState === 5 ? <MovingAverage /> : <></>}
      {toggleState === 6 ? <PivotPoints /> : <></>}
    </div>
  );
}
