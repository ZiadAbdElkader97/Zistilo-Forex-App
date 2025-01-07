import "./MovingAverage.css";
import { useState } from "react";
import { MovingTabs } from "../../assets/data/MovingAverage";
import SMA from "./SMA";
import EMA from "./EMA";

export default function MovingAverage() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="moving">
      <div className="moving_tabs">
        {MovingTabs.map((item) => (
          <span
            key={item.id}
            className={
              toggleState === item.id
                ? "moving_tab moving_active"
                : "moving_tab"
            }
            onClick={() => toggleTab(item.id)}
          >
            {item.tab}
          </span>
        ))}
      </div>
      {toggleState === 1 && <SMA />}
      {toggleState === 2 && <EMA />}
    </div>
  );
}
