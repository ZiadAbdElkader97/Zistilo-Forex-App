import "./Tech_Section.css";
import { useState } from "react";
import Beginner from "./Beginner.jsx";
import Intermediate from "./Intermediate.jsx";
import Advanced from "./Advanced.jsx";
import UseUser from "../../context/UseUser.jsx";
import UseModal from "../../context/UseModal.jsx";

export default function Tech_Section() {
  const { user } = UseUser();
  const { setIsModalOpen } = UseModal();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  if (!user) {
    setIsModalOpen(true);
    return null;
  }

  return (
    <>
      <div className="tech_indicator">
        <div className="tech_tabs">
          <span
            className={
              toggleState === 1 ? "tech_tab tech_tab_active" : "tech_tab"
            }
            onClick={() => toggleTab(1)}
            style={{ borderRadius: "4px 0 0 4px" }}
          >
            Beginner
          </span>
          <span
            className={
              toggleState === 2 ? "tech_tab tech_tab_active" : "tech_tab"
            }
            onClick={() => toggleTab(2)}
          >
            Intermediate
          </span>
          <span
            className={
              toggleState === 3 ? "tech_tab tech_tab_active" : "tech_tab"
            }
            onClick={() => toggleTab(3)}
            style={{ borderRadius: "0 4px 4px 0px" }}
          >
            Advanced
          </span>
        </div>
        {toggleState === 1 ? <Beginner /> : <></>}
        {toggleState === 2 ? <Intermediate /> : <></>}
        {toggleState === 3 ? <Advanced /> : <></>}
      </div>
    </>
  );
}
