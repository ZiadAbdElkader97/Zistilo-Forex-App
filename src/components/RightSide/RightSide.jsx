/* eslint-disable react/prop-types */
import "./RightSide.css";
import { useState } from "react";
import Tech_Section from "../Technical_Indicator/Tech_Section.jsx";
import RSide_Symbol from "../RSide_Symbol/RSide_Symbol.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import Patterns from "../Patterns/Patterns.jsx";
import MovingAverage from "../MovingAverage/MovingAverage.jsx";
import PivotPoints from "../PivotPoints/PivotPoints.jsx";
import { FaProjectDiagram, FaRegCalendarAlt } from "react-icons/fa";
import { FaCalculator, FaChartBar, FaChartLine } from "react-icons/fa6";
import { SiSymbolab } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function RightSide({ isRightSideOpen, toggleRightSide }) {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
    if (!isRightSideOpen) {
      toggleRightSide();
    }
  };

  return (
    <div className={isRightSideOpen ? "right_side" : "sm_right_side"}>
      <div className="tabs">
        <span
          title={t("Symbol")}
          className={toggleState === 1 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(1);
            isRightSideOpen(true);
          }}
        >
          {isRightSideOpen ? (
            (t("Symbol"))
          ) : (
            <SiSymbolab style={{ fontSize: "20px" }} />
          )}
        </span>
        <span
          title={t("Calendar")}
          className={toggleState === 2 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(2);
            isRightSideOpen(true);
          }}
        >
          {isRightSideOpen ? (
            (t("Calendar"))
          ) : (
            <FaRegCalendarAlt style={{ fontSize: "20px" }} />
          )}
        </span>
        <span
          title={t("Technical Indicator")}
          className={toggleState === 3 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(3);
            isRightSideOpen(true);
          }}
        >
          {isRightSideOpen ? (
            (t("Tech"))
          ) : (
            <FaChartBar style={{ fontSize: "20px" }} />
          )}
        </span>
        <span
          title={t("Patterns")}
          className={toggleState === 4 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(4);
            isRightSideOpen(true);
          }}
        >
          {isRightSideOpen ? (
            (t("Patterns"))
          ) : (
            <FaProjectDiagram style={{ fontSize: "20px" }} />
          )}
        </span>
        <span
          title={t("Moving Average")}
          className={toggleState === 5 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(5);
            isRightSideOpen(true);
          }}
        >
          {isRightSideOpen ? (
            (t("M.A"))
          ) : (
            <FaChartLine style={{ fontSize: "20px" }} />
          )}
        </span>
        <span
          title={t("Pivot Points")}
          className={toggleState === 6 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(6);
            isRightSideOpen(true);
          }}
        >
          {isRightSideOpen ? (
            (t("P.P"))
          ) : (
            <FaCalculator style={{ fontSize: "20px" }} />
          )}
        </span>

        <div className="right_side_bar" onClick={toggleRightSide}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isRightSideOpen && (
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
