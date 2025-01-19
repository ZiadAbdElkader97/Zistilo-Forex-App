import "./PivotPoints.css";
import { useState } from "react";
import { PivotTabs } from "../../assets/data/PivotPointsData";
import Classic from "../PivotPoints/Classic";
import Fibonacci from "../PivotPoints/Fibonacci";
import Camarilla from "../PivotPoints/Camarilla";
import { useTranslation } from "react-i18next";

export default function PivotPoints() {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="pivot_points">
      <div className="pivot_tabs">
        {PivotTabs.map((item) => (
          <span
            key={item.id}
            className={
              toggleState === item.id ? "pivot_tab pivot_active" : "pivot_tab"
            }
            onClick={() => toggleTab(item.id)}
          >
            {t(item.tab)}
          </span>
        ))}
      </div>
      {toggleState === 1 && <Classic />}
      {toggleState === 2 && <Fibonacci />}
      {toggleState === 3 && <Camarilla />}
    </div>
  );
}
