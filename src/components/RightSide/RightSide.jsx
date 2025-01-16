import "./RightSide.css";
import { useEffect, useState } from "react";
import Tech_Section from "../Technical_Indicator/Tech_Section.jsx";
import RSide_Symbol from "../RSide_Symbol/RSide_Symbol.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import Patterns from "../Patterns/Patterns.jsx";
import MovingAverage from "../MovingAverage/MovingAverage.jsx";
import PivotPoints from "../PivotPoints/PivotPoints.jsx";

export default function RightSide() {
  const [open, setOpen] = useState(window.innerWidth > 768);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={open ? "right_side" : "sm_right_side"}>
      <div className="tabs">
        <span
          title="Symbol"
          className={toggleState === 1 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(1);
            setOpen(true);
          }}
        >
          Symbol
        </span>
        <span
          title="Calendar"
          className={toggleState === 2 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(2);
            setOpen(true);
          }}
        >
          Calendar
        </span>
        <span
          title="Technical Indicator"
          className={toggleState === 3 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(3);
            setOpen(true);
          }}
        >
          Tech
        </span>
        <span
          title="Patterns"
          className={toggleState === 4 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(4);
            setOpen(true);
          }}
        >
          Patterns
        </span>
        <span
          title="Moving Average"
          className={toggleState === 5 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(5);
            setOpen(true);
          }}
        >
          M.A
        </span>
        <span
          title="Pivot Points"
          className={toggleState === 6 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(6);
            setOpen(true);
          }}
        >
          P.P
        </span>

        <div className="right_side_bar" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {open && (
        <>
          {toggleState === 1 && <RSide_Symbol />}
          {toggleState === 2 && <Calendar />}
          {toggleState === 3 && <Tech_Section />}
          {toggleState === 4 && <Patterns />}
          {toggleState === 5 && <MovingAverage />}
          {toggleState === 6 && <PivotPoints />}
        </>
      )}
    </div>
  );
}
